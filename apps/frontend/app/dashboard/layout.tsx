import LogoutButton from '../../components/LogoutButton'

export default function Header() {
  return (
    <div className="flex justify-between items-center p-4 shadow">
      <h1 className="text-xl font-bold">CareerPlan</h1>
      <LogoutButton />
    </div>
  )
}
