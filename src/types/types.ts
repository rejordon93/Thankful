export type registerType = {
  username: string;
  email: string;
  password: string;
};
export type loginType = {
  email: string;
  password: string;
};

export type UserNavType = {
  id: number;
  email: string;
  username: string;
};
export type createProfileType = {
  firstname: string;
  lastname: string;
  title: string;
  profileImage: string;
  phone: string;
};
