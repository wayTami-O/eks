type AuthUser = {
  id: string;
  login: string;
  role: "USER" | "ADMIN";
  fullName: string;
  email?: string;
  phone?: string;
};

export function useAuth() {
  const resolveBase = useApiBase();
  const token = useCookie<string | null>("korochki_token", {
    maxAge: 60 * 60 * 24 * 7,
    sameSite: "lax",
  });
  const user = useState<AuthUser | null>("auth-user", () => null);

  async function refreshMe() {
    if (!token.value) {
      user.value = null;
      return;
    }
    try {
      const res = await $fetch<{ ok: boolean; user?: AuthUser }>(
        `${resolveBase()}/api/me`,
        {
          headers: { Authorization: `Bearer ${token.value}` },
        },
      );
      user.value = res.ok && res.user ? res.user : null;
      if (!user.value) token.value = null;
    } catch {
      token.value = null;
      user.value = null;
    }
  }

  function setSession(newToken: string, u: AuthUser) {
    token.value = newToken;
    user.value = u;
  }

  function logout() {
    token.value = null;
    user.value = null;
  }

  return {
    token,
    user,
    refreshMe,
    setSession,
    logout,
  };
}
