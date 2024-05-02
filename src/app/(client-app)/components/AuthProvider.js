const AuthProvider = () => {


  useEffect(() => {
    async function activeSession() {
      const {
        data: { session: activeSession },
      } = await supabase.auth.getSession();
      setSession(activeSession);
      setUser(activeSession?.user ?? null );
      }
      getActiveSession();
  }, [])
}

export default AuthProvider;