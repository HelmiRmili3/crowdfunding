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

export const parseActors = (response) => {
  const parsedList = [];
  response.forEach((actor) => {
    parsedList.push(parseActor(actor));
  });
  return parsedList;
};



export const truncateAddress = (address, length = 5) => {
  if (address.length <= length * 2) {
    return address;
  }
  const start = address.slice(0, length);
  const end = address.slice(-length);
  return `${start}...${end}`;
};
export const getRoleName = (role) => {
  switch (role) {
    case 0n:
      return "admin";
    case 1n:
      return "association";
    case 2n:
      return "donor";
    case 3n:
      return "evaluator";
    default:
      return "login";
  }
};
