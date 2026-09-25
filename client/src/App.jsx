import Header from "./сomponents/Header";
import Sidebar from "./сomponents/Sidebar";
import StatCard from "./сomponents/StatCard";
import TaskCard from "./сomponents/TaskCard";
import { tasks } from "./data/tasks";
export default function App() {
 return (
 <div className="appShell">
 <Sidebar />
 <main className="content">
 <Header />
 <section className="statsGrid" aria-label="Статистика">
 <StatCard label="Всего задач" value="12" note="+3 за эту неделю" />
 <StatCard label="В работе" value="4" note="Нужны сегодня" />
 <StatCard label="Готово" value="6" note="Хороший темп" />
 <StatCard label="Проектов" value="3" note="Учёба и портфолио" />
 <StatCard label="Просрочено" value="0" note="Учёба и портфолио" />
 </section>
 <section className="panel">
 <div className="sectionHeading">
 <div>
 <p className="eyebrow">Фокус</p>
 <h2>Ближайшие задачи</h2>
 </div>
 <button className="ghostButton" type="button">Показать все</button>
 </div>
 <div className="taskList">
 {tasks.map((task) => (
 <TaskCard key={task.id} task={task} />
 ))}
 </div>
 </section>
 </main>
 </div>
 );
}