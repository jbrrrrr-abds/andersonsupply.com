import { createClient } from "@supabase/supabase-js";
import styled from "styled-components";
const users = createClient("https://xyzcompany.supabase.co", "public-anon-key");

const ClientDesignsAuth = ({ page, updateAuth, isAuth }) => {
  return (
    <section>
      <form action="#"></form>
    </section>
  );
};

export default ClientDesignsAuth;
