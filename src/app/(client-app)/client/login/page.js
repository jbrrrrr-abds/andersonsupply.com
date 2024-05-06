"use client";
import FormFields from 'clientapp/components/login/FormFields';

const ClientAuth = ({ page }) => {
  return (
    <div className="flex flex-col">
      <h1 className="text-center max-w-[800px] mx-auto text-2xl mb-4">
        Please log in to view your design archive
      </h1>
      <FormFields />
    </div>
  );
};

export default ClientAuth;
