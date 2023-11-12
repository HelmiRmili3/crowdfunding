import Web3 from "web3";

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

  const providerUrl = "http://localhost:8545";
  const web3 = new Web3(new Web3.providers.HttpProvider(providerUrl));
  const calculateDaysDifference = (timestamp) => {
    const currentTimestamp = Math.floor(Date.now() / 1000); // Get current timestamp in seconds
    console.log("current timestamp in secondes",currentTimestamp);
    const endDate = Number(timestamp); // Convert the provided timestamp to a number
    console.log("end date in secondes",timestamp);
    const timeDifferenceInSeconds = endDate - currentTimestamp;
    const daysDifference = Math.ceil(timeDifferenceInSeconds / (60 * 60 * 24)); // Convert seconds to days

    return daysDifference;
  };

  return {
    amount: web3.utils.fromWei(response.amount.toString(), "ether"), // Convert amount from wei to ether
    creator: response.creator,
    dataUrl: response.dataUrl,
    description: response.description,
    donors: response.donors,
    endDate: calculateDaysDifference(response.endDate),
    field: response.field,
    id: response.id,
    imageUrl: response.imageUrl,
    period: Math.ceil(Number(response.period) / (60 * 60 * 24)),
    raisedAmount: web3.utils.fromWei(response.raisedAmount.toString(), "ether"), // Convert raisedAmount from wei to ether
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

export const customFilter = (data, status) => {
  const filterdData = data.filter((compain) => compain.status === status);
  return filterdData;
};

export const customFilterAssociation = (data, creator) => {
  const filterdData = data.filter((compain) => compain.creator === creator);
  return filterdData;
};
