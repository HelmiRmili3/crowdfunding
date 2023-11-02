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

export const parseCampain = (response) => {
  return {
    amount: response.amount,
    creator: response.creator,
    dataUrl: response.dataUrl,
    description: response.description,
    donors: response.donors,
    endDate: response.endDate,
    field: response.field,
    id: response.id,
    imageUrl: response.imageUrl,
    period: response.period,
    raisedAmount: response.raisedAmount,
    status: response.status,
    title: response.title,
  };
};

export const parseCampains = (response) => {
  const parsedList = [];
  response.forEach((campain) => {
    parsedList.push(parseCampain(campain));
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

// enum Status {
//   Waiting,
//   Invalid,
//   Valid,
//   Done
// }

export const customFilter = (data,status) => {
  const filterdData = data.filter((compain) => compain.status === status);
  return filterdData;
};
// export const invalidFilter = () => {};
// export const validFilter = () => {};
