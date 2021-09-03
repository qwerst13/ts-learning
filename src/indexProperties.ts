interface ErrorContainer {
  [prop: string]: string;
}

// This definition allows us to store any object key/property with defined type, but without exact describing what name it should have

const error: ErrorContainer = {
  email: "Not valid email",
  username: "No such user in database",
};
