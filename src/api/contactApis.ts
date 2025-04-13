import base from "./base";
export const createContact = async (contactData: any) => {
  try {
    const response = await base.post(
      "/api/contact/create_contact",
      contactData,
      {
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
    return response.data;
  } catch (error: any) {
    console.error("Error creating contact:", error);
    throw error;
  }
};
