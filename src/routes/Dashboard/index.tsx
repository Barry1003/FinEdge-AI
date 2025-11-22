import { createFileRoute } from '@tanstack/react-router' 
import FinancialDashboard from '../../data/component/DashordComponent/Analytics'

export const Route = createFileRoute('/Dashboard/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <Dashboard/>
}

const Dashboard: React.FC = () =>{
  return(
    <>
    <FinancialDashboard/>
    </>
  )
}

export default Dashboard