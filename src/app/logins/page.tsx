'use client'
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { LoginRequest } from '@/type/auth';
import axiosClient from '@/services/api';
const Cookies = require("js-cookie");

export default function Login() {
  const router = useRouter();
  const [form, setForm] = useState<LoginRequest>({ email: "", password: "" });
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    try {
        const response = await axiosClient.post("/api/auth/signin", form);

        if (response.data?.content) {
            const { user, token } = response.data.content;

            // Lưu token vào Cookie để middleware nhận diện
            Cookies.set("access_token", token, { expires: 1, path: "/" });

            if (user.role === "ADMIN") {
                router.push("/admin");
            } else {
                setError("Bạn không có quyền truy cập trang Admin.");
            }
        } else {
            setError("Lỗi hệ thống! Không thể đăng nhập.");
        }
    } catch (error) {
        setError("Sai tài khoản hoặc mật khẩu");
    }
};
  return (
    <div className='flex items-center justify-center h-screen'>
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold">
            Đăng nhập hoặc đăng ký
          </h2>
        </div>
        <form onSubmit={handleSubmit}>
          <h3 className="text-lg font-semibold mb-4">
            Chào mừng bạn đến với Airbnb
          </h3>
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Mật khẩu
            </label>
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Mật khẩu"
              value={form.password}
              onChange={handleChange}
              className="mt-1 block w-full pl-3 pr-3 py-2 border border-gray-300 rounded-md shadow-sm"
            />
          </div>
          <button type="submit" className="w-full bg-pink-600 text-white py-2 rounded-md text-lg font-semibold mb-4">
            Tiếp tục
          </button>
        </form>
        
        {error && <p className="text-red-500">{error}</p>}
      </div>
    </div>
  );
};
