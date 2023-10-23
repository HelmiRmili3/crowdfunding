

export const parseActor = (response) => {
  return {
    id: response.id,
    address: response.wallet,
    imageUrl: response.imageUrl,
    role: response.role,
    cin: response.cin,
    description: response.description,
    password: response.password,
  };
};
