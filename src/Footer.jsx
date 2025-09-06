import { useValues } from './GlobalContexts'

export default function Footer() {
  const { theme } = useValues()
  return (
    <footer style={{ boxShadow: `0 0 1px ${theme.text}`, backgroundColor: theme.bg, color: theme.text }}
      className="p-2 not-sm:pb-5 transition-all duration-700 text-center ">
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </footer>
  )
}
