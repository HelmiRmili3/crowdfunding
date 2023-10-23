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

export const getPath = (role) => {
  const path = '';
  switch (role) {
    case '0':
      path = "/admin";
    case '1':
      path = "/association";
    case '2':
      path = "/donor";
    case '3':
      path = "/evaluator";
    default:
      break;
  }
  return path;
};
