export interface LoginRequest {
    email: string;
    password: string;
  }
  
  export interface LoginResponse {
    accessToken: string;
    refreshToken?: string;
    user: {
      id: number;
      name: string;
      email: string;
      password: string;
      phone: number;
      birthday: number;
      avatar: string;
      gender: boolean
      role: "ADMIN" | "USER";
    };
  };


  export interface RegisterRequest {
    name: string;
    email: string;
    password: string;
    role?: "ADMIN" | "USER"; // Mặc định là USER, ADMIN có thể set từ Dashboard
  }
  
  export interface RegisterResponse {
    id: number;
    name: string;
    email: string;
    role: "ADMIN" | "USER";
  }
  
  