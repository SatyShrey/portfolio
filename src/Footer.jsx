import { useValues } from './GlobalContexts'

export default function Footer() {
  const { theme } = useValues()
  return (
    <footer style={{ boxShadow: `0 0 1px ${theme.color}`,}}
      className="p-2 text-center ">
      <p>Copyright © {new Date().getFullYear()} - All right reserved</p>
    </footer>
  )
}
