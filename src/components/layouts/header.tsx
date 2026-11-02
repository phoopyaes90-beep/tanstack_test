import { Link } from '@tanstack/react-router'
import navLinks from '../../constants/navlinks'

const Header = () => {
  return (
    /* header tag ကို w-full နဲ့ border line ကို screen အပြည့်ဖြစ်စေရန် border-b ထည့်ခြင်း */
    <header className="w-full border-b border-slate-200 bg-white">
      {/* အထဲက Content တွေကိုသာ max-w-7xl နဲ့ အလယ်မှာ ကန့်သတ်ထားခြင်း */}
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo Section */}
        <Link to="/" className="flex items-center gap-2 cursor-pointer">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-blue-600 text-white font-bold shadow-sm">
            S
          </div>
          <span className="text-xl font-bold text-slate-900">Sai</span>
        </Link>

        {/* Navigation Links */}
        <nav>
          <ul className="flex items-center gap-2 font-medium text-slate-600">
            {navLinks.map((link) => (
              <li key={link.link}>
                <Link
                  to={link.link}
                  className="rounded-full px-4 py-2 transition-colors hover:bg-slate-100 hover:text-slate-900 [&.active]:bg-slate-100 [&.active]:text-slate-900"
                >
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header