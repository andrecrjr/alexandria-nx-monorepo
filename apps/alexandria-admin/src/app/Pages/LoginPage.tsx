import { Link, useNavigate } from 'react-router-dom';

import { classValidatorResolver } from '@hookform/resolvers/class-validator';
import { Button, Checkbox, Input, Label } from '@alexandria/shadcn-ui';
import { useForm } from 'react-hook-form';
import { AuthCredentialsSchema } from '@alexandria/shared-dto-api/authentication/formSchema';
import request from '../services';

const authResolver = classValidatorResolver(AuthCredentialsSchema);

export default function LoginPage() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm<AuthCredentialsSchema>({
    resolver: authResolver
  });
  const goTo = useNavigate();
  const _onSubmit = async ({ email, password }: AuthCredentialsSchema) => {
    try {
      const { data } = await request.post<{ accessToken: string }>(
        '/auth/login',
        {
          email,
          password
        },
        {
          withCredentials: true
        }
      );
      localStorage.setItem('accessToken', data.accessToken);
      goTo('/create');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="flex w-screen min-h-screen flex-col items-center justify-center bg-gray-100 py-12 px-4 sm:px-6 lg:px-8 dark:bg-gray-950">
      <div className="w-full max-w-md space-y-8">
        <div>
          <h2 className="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900 dark:text-gray-50">
            Sign in to your Nilo Account
          </h2>
          <p className="mt-2 text-center text-sm text-gray-600 dark:text-gray-400">
            Or{' '}
            <Link
              to="#"
              className="font-medium text-indigo-600 hover:text-indigo-500"
            >
              sign up for a new account
            </Link>
          </p>
        </div>
        <form
          className="mt-8 space-y-6"
          action="#"
          method="POST"
          onSubmit={handleSubmit(_onSubmit)}
        >
          <input type="hidden" name="remember" defaultValue="true" />
          <div className="-space-y-px rounded-md shadow-sm">
            <div>
              <Label htmlFor="email" className="sr-only">
                Email address
              </Label>
              <Input
                id="email"
                type="email"
                {...register('email')}
                autoComplete="email"
                required
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 sm:text-sm"
                placeholder="Email address"
              />
            </div>
            <div>
              <Label htmlFor="password" className="sr-only">
                Password
              </Label>
              <Input
                id="password"
                type="password"
                {...register('password')}
                autoComplete="current-password"
                required
                className="relative block w-full appearance-none rounded-none rounded-b-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-50 dark:placeholder-gray-400 sm:text-sm"
                placeholder="Password"
              />
            </div>
            <p>{errors && errors?.email ? errors.email.message : null}</p>
            <p className="capitalize text-red-500">
              {errors && errors?.password ? errors.password.message : null}
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Checkbox
                id="remember-me"
                name="remember-me"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500"
              />
              <Label
                htmlFor="remember-me"
                className="ml-2 block text-sm text-gray-900 dark:text-gray-50"
              >
                Remember me
              </Label>
            </div>
            <div className="text-sm">
              <Link
                to="#"
                className="font-medium text-indigo-600 hover:text-indigo-500"
              >
                Forgot your password?
              </Link>
            </div>
          </div>
          <div>
            <Button
              type="submit"
              className="group relative flex w-full justify-center rounded-md border border-transparent bg-indigo-600 py-2 px-4 text-sm font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 dark:bg-indigo-500 dark:hover:bg-indigo-600 dark:focus:ring-indigo-600"
            >
              Sign in
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
}
