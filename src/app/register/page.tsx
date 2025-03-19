'use client';

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/navigation';
import axiosClient from '@/services/api';
import { useState } from 'react';

// 🔹 Định nghĩa kiểu dữ liệu form
interface RegisterForm {
  username: string;
  password: string;
  confirmPassword: string;
  name: string;
  email: string;
  phone: string;
}

// ✅ Schema validation với Yup
const schema = yup.object({
  username: yup.string().required('Tài khoản không được để trống'),
  name: yup.string().required('Họ và tên không được để trống').min(3, 'Họ và tên phải có ít nhất 3 ký tự'),
  email: yup.string().required('Email không được để trống').email('Email không hợp lệ'),
  phone: yup.string().required('Số điện thoại không được để trống').matches(/^\d{10,11}$/, 'Số điện thoại không hợp lệ'),
  password: yup.string().required('Mật khẩu không được để trống').min(6, 'Mật khẩu phải có ít nhất 6 ký tự'),
  confirmPassword: yup.string().oneOf([yup.ref('password')], 'Mật khẩu nhập lại không khớp').required('Vui lòng nhập lại mật khẩu'),
});

export default function Register() {
  const router = useRouter();
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  // 🚀 Sử dụng React Hook Form + Yup
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<RegisterForm>({
    resolver: yupResolver(schema),
  });

  // 🔹 Xử lý đăng ký
  const onSubmit = async (data: RegisterForm) => {
    setLoading(true);
    setError(null);

    try {
      await axiosClient.post('/api/auth/signup', data);
      alert('Tạo tài khoản thành công! Hãy đăng nhập.');
      router.push('/login');
    } catch (err: any) {
      const errorMessage = err.response?.data?.content || 'Lỗi hệ thống, vui lòng thử lại!';
      if (errorMessage.includes('Email đã tồn tại')) {
        setError('Email đã tồn tại, vui lòng chọn email khác.');
      } else {
        setError(errorMessage);
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-black bg-opacity-50">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-md p-6">
        <h2 className="text-2xl font-semibold text-center mb-4">Đăng ký</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          {/* 🔹 Tài khoản */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Tài khoản</label>
            <input
              className="mt-1 block w-full border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Tài khoản"
              {...register('username')}
            />
            {errors.username && <p className="text-red-500 text-sm">{errors.username.message}</p>}
          </div>

          {/* 🔹 Họ và tên */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Họ và tên</label>
            <input
              className="mt-1 block w-full border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Họ và tên"
              {...register('name')}
            />
            {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
          </div>

          {/* 🔹 Email */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              className="mt-1 block w-full border-gray-300 rounded-md p-2"
              type="email"
              placeholder="Email"
              {...register('email')}
            />
            {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
          </div>

          {/* 🔹 Số điện thoại */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Số điện thoại</label>
            <input
              className="mt-1 block w-full border-gray-300 rounded-md p-2"
              type="text"
              placeholder="Số điện thoại"
              {...register('phone')}
            />
            {errors.phone && <p className="text-red-500 text-sm">{errors.phone.message}</p>}
          </div>

          {/* 🔹 Mật khẩu */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Mật khẩu</label>
            <input
              className="mt-1 block w-full border-gray-300 rounded-md p-2"
              type="password"
              placeholder="Mật khẩu"
              {...register('password')}
            />
            {errors.password && <p className="text-red-500 text-sm">{errors.password.message}</p>}
          </div>

          {/* 🔹 Nhập lại mật khẩu */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">Nhập lại mật khẩu</label>
            <input
              className="mt-1 block w-full border-gray-300 rounded-md p-2"
              type="password"
              placeholder="Nhập lại mật khẩu"
              {...register('confirmPassword')}
            />
            {errors.confirmPassword && <p className="text-red-500 text-sm">{errors.confirmPassword.message}</p>}
          </div>

          {/* 🔹 Hiển thị lỗi nếu có */}
          {error && <p className="text-red-500 text-sm mb-2">{error}</p>}

          {/* 🔹 Nút đăng ký */}
          <button
            type="submit"
            className={`w-full py-2 rounded-md text-lg font-semibold transition duration-300 ${
              loading ? 'bg-gray-500 cursor-not-allowed' : 'bg-pink-600 hover:bg-pink-700 text-white'
            }`}
            disabled={loading}
          >
            {loading ? 'Đang đăng ký...' : 'Đăng ký'}
          </button>
        </form>

        {/* 🔹 Điều hướng đến trang đăng nhập */}
        <div className="mt-2">
          <button
            onClick={() => router.push('/logins')}
            className="w-full bg-gray-300 text-black py-2 rounded-md text-lg font-semibold hover:bg-gray-500 cursor-pointer"
          >
            Đăng nhập →
          </button>
        </div>
      </div>
    </div>
  );
}
