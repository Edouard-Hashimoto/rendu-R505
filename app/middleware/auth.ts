import { jwtDecode } from "jwt-decode";

export default defineNuxtRouteMiddleware(() => {
  const token = useCookie("recipe_token");

  if (!token?.value) {
    return navigateTo("/login");
  }

  try {
    const decoded = jwtDecode(token.value);

    const now = Date.now() / 1000;
    if (!decoded.exp || decoded.exp < now) {
      token.value = null;
      return navigateTo("/login");
    }
  } catch {
    token.value = null;
    return navigateTo("/login");
  }
});
