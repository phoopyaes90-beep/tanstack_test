
import { Link, useNavigate } from '@tanstack/react-router'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar'
import useAuthStore from '@/stores/useAuthStore'
import navLinks from '@/constants/navlinks'

const Header = () => {
  const { isAuthenticated, clearInfo, user } = useAuthStore()
  const navigate = useNavigate()

  const logout = () => {
    clearInfo()
    navigate({ to: '/login' })
  }
  return (
    <header className="bg-blue-100 flex justify-between max-w-6xl mx-auto ">
      <ul className="flex items-center gap-2 ">
        {navLinks.filter((link)=> !(isAuthenticated && link.link === '/login')).map((link) => (
          <li key={link.link}>
            <Link to={link.link}>{link.title}</Link>
          </li>
        ))}
      </ul>

      {isAuthenticated && (
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuGroup>
              <DropdownMenuLabel>{user?.email}</DropdownMenuLabel>
              <DropdownMenuItem>
                <Link to="/dashboard">Dashboard</Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuGroup>
          </DropdownMenuContent>
        </DropdownMenu>
      )}
    </header>
  )
}

export default Header