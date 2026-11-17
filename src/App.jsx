
import {
  LayoutDashboard, Code2, BookOpen, BrainCircuit,
  BarChart3, Settings, Bell, Search, ChevronRight,
  Flame, Trophy, Clock3, ArrowUpRight, Play,
  Terminal, Sparkles, CircleCheck, Menu
} from "lucide-react";

const stats = [
  { title: "Completed Exercises", value: "24", change: "+12%", icon: Code2, color: "blue" },
  { title: "Learning Hours", value: "18.5h", change: "+8%", icon: Clock3, color: "violet" },
  { title: "Current Streak", value: "07 Days", change: "Keep it up!", icon: Flame, color: "orange" },
  { title: "Your Accuracy", value: "86%", change: "+5.4%", icon: Trophy, color: "green" },
];

const courses = [
  { name: "Python Fundamentals", description: "Master Python from scratch", progress: 75, color: "bg-blue-500", icon: "🐍" },
  { name: "Data Structures", description: "Learn arrays and algorithms", progress: 45, color: "bg-violet-500", icon: "🧩" },
  { name: "Problem Solving", description: "Improve your coding logic", progress: 30, color: "bg-orange-500", icon: "💡" },
];

const activities = [
  { name: "Two Sum Problem", category: "Arrays", time: "Today, 10:30 AM", status: "Completed" },
  { name: "Python Variables", category: "Python Basics", time: "Yesterday", status: "Completed" },
  { name: "Loop Challenge", category: "Control Flow", time: "Yesterday", status: "In Progress" },
];

function App() {
  return (
    <div className="min-h-screen bg-[#f7f8fc] flex text-slate-800">

      {/* SIDEBAR */}
      <aside className="hidden lg:flex w-64 bg-white border-r border-slate-200 flex-col fixed inset-y-0">
        <div className="p-6 flex items-center gap-3">
          <div className="bg-gradient-to-br from-blue-600 to-violet-600 text-white p-3 rounded-2xl">
            <Code2 size={25}/>
          </div>
          <div>
            <h1 className="font-extrabold text-lg">CloudLab<span className="text-blue-600">.</span></h1>
            <p className="text-xs text-slate-400">Smart Coding Platform</p>
          </div>
        </div>

        <div className="px-5 mt-8 text-xs font-bold text-slate-400 tracking-widest">
          WORKSPACE
        </div>

        <nav className="px-4 mt-4 space-y-2">
          {[
            [LayoutDashboard, "Dashboard", true],
            [Code2, "Code Playground", false],
            [BookOpen, "Practice Exercises", false],
            [BrainCircuit, "AI Assistant", false],
            [BookOpen, "Learning Notes", false],
            [BarChart3, "My Progress", false],
          ].map(([Icon, label, active]) => (
            <button key={label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-medium transition ${
                active
                ? "bg-blue-600 text-white shadow-lg shadow-blue-200"
                : "text-slate-500 hover:bg-slate-50 hover:text-blue-600"
              }`}>
              <Icon size={19}/>
              {label}
              {label === "AI Assistant" && (
                <span className="ml-auto w-2 h-2 rounded-full bg-emerald-400"/>
              )}
            </button>
          ))}
        </nav>

        <div className="mt-auto p-5">
          <div className="bg-gradient-to-br from-indigo-600 to-blue-500 p-5 rounded-2xl text-white">
            <Sparkles size={23}/>
            <h3 className="font-bold mt-3">AI Learning Buddy</h3>
            <p className="text-xs text-blue-100 mt-2 leading-5">
              Get smarter explanations and improve your coding skills.
            </p>
            <button className="bg-white text-blue-700 rounded-lg px-3 py-2 text-xs font-bold mt-4">
              Explore AI →
            </button>
          </div>
          <button className="flex gap-3 items-center text-sm text-slate-500 mt-5 px-2">
            <Settings size={18}/> Settings
          </button>
        </div>
      </aside>

      {/* MAIN AREA */}
      <main className="flex-1 lg:ml-64 min-w-0">

        {/* TOPBAR */}
        <header className="h-20 bg-white border-b border-slate-200 flex items-center justify-between px-5 md:px-9">
          <div className="flex items-center gap-3">
            <button className="lg:hidden"><Menu/></button>
            <div>
              <p className="font-bold text-lg">Dashboard</p>
              <p className="text-xs text-slate-400">Your learning workspace</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center bg-slate-50 border rounded-xl px-3 py-2">
              <Search size={17} className="text-slate-400"/>
              <input placeholder="Search anything..." className="bg-transparent outline-none ml-2 text-sm w-40"/>
            </div>
            <button className="relative p-2 rounded-xl hover:bg-slate-100">
              <Bell size={20}/>
              <span className="absolute top-1 right-1 bg-red-500 w-2 h-2 rounded-full"/>
            </button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-violet-500 text-white font-bold grid place-items-center">
                ST
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold">Student</p>
                <p className="text-xs text-slate-400">Free Account</p>
              </div>
            </div>
          </div>
        </header>

        <div className="p-5 md:p-9 max-w-[1500px] mx-auto">

          {/* HERO */}
          <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-[#2559df] via-[#5149df] to-[#8053e8] p-7 md:p-10 text-white shadow-xl shadow-indigo-100">
            <div className="relative z-10 max-w-xl">
              <span className="bg-white/15 px-3 py-1.5 rounded-full text-xs font-semibold">
                ✨ YOUR CODING JOURNEY STARTS HERE
              </span>
              <h2 className="text-3xl md:text-4xl font-extrabold mt-5 leading-tight">
                Build Skills.<br/>Write Code. Grow Smarter.
              </h2>
              <p className="text-blue-100 text-sm mt-4 leading-6">
                Welcome back! Continue learning Python, solve coding
                challenges and improve your programming skills.
              </p>
              <button className="mt-6 bg-white text-blue-700 px-5 py-3 rounded-xl text-sm font-bold flex items-center gap-2 hover:bg-blue-50">
                <Play size={16} fill="currentColor"/> Start Coding
              </button>
            </div>
            <div className="absolute right-10 top-10 opacity-10 hidden md:block">
              <Code2 size={230}/>
            </div>
          </section>

          {/* STATISTICS */}
          <section className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-5 mt-8">
            {stats.map(({title,value,change,icon:Icon,color}) => (
              <div key={title} className="bg-white border border-slate-100 rounded-2xl p-5 shadow-sm hover:shadow-lg transition">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-slate-500">{title}</span>
                  <div className={`p-3 rounded-xl bg-${color}-50 text-${color}-600`}>
                    <Icon size={21}/>
                  </div>
                </div>
                <h3 className="text-2xl font-extrabold mt-4">{value}</h3>
                <p className="text-xs text-emerald-600 mt-2 font-semibold">
                  ↗ {change}
                </p>
              </div>
            ))}
          </section>

          {/* LEARNING + QUICK ACTIONS */}
          <section className="grid xl:grid-cols-3 gap-6 mt-8">

            <div className="xl:col-span-2 bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <div className="flex justify-between items-center mb-6">
                <div>
                  <h3 className="font-bold text-lg">Continue Learning</h3>
                  <p className="text-xs text-slate-400 mt-1">Pick up where you left off</p>
                </div>
                <button className="text-sm text-blue-600 font-semibold">View All →</button>
              </div>

              <div className="space-y-6">
                {courses.map(course => (
                  <div key={course.name}>
                    <div className="flex justify-between gap-3">
                      <div className="flex gap-3 items-center">
                        <div className="w-11 h-11 rounded-xl bg-slate-50 grid place-items-center text-xl">
                          {course.icon}
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm">{course.name}</h4>
                          <p className="text-xs text-slate-400 mt-1">{course.description}</p>
                        </div>
                      </div>
                      <span className="text-sm font-bold">{course.progress}%</span>
                    </div>
                    <div className="h-2 bg-slate-100 rounded-full mt-3 overflow-hidden">
                      <div className={`h-full ${course.color} rounded-full`}
                        style={{width: `${course.progress}%`}}/>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm">
              <h3 className="font-bold text-lg">Quick Actions</h3>
              <p className="text-xs text-slate-400 mt-1">Jump into your workspace</p>
              <div className="space-y-3 mt-6">
                {[
                  [Terminal,"Open Code Editor","bg-blue-50 text-blue-600"],
                  [BookOpen,"Solve Exercises","bg-violet-50 text-violet-600"],
                  [BrainCircuit,"Ask AI Assistant","bg-emerald-50 text-emerald-600"],
                ].map(([Icon,label,style])=>(
                  <button key={label} className="w-full flex items-center gap-3 border border-slate-100 p-3 rounded-xl hover:border-blue-300 hover:bg-blue-50/30 transition">
                    <div className={`p-3 rounded-xl ${style}`}><Icon size={19}/></div>
                    <span className="text-sm font-semibold">{label}</span>
                    <ArrowUpRight size={16} className="ml-auto text-slate-400"/>
                  </button>
                ))}
              </div>
            </div>
          </section>

          {/* RECENT ACTIVITY */}
          <section className="bg-white border border-slate-100 rounded-2xl p-6 shadow-sm mt-8">
            <div className="flex justify-between items-center mb-5">
              <div>
                <h3 className="font-bold text-lg">Recent Coding Activity</h3>
                <p className="text-xs text-slate-400 mt-1">Your latest learning activities</p>
              </div>
              <button className="text-sm text-blue-600 font-semibold">See all</button>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left min-w-[550px]">
                <thead>
                  <tr className="text-xs text-slate-400 border-b">
                    <th className="py-3">EXERCISE</th>
                    <th>CATEGORY</th>
                    <th>DATE</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {activities.map(item => (
                    <tr key={item.name} className="border-b last:border-0 text-sm">
                      <td className="py-4 font-semibold">{item.name}</td>
                      <td className="text-slate-500">{item.category}</td>
                      <td className="text-slate-400">{item.time}</td>
                      <td>
                        <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                          item.status === "Completed"
                          ? "bg-emerald-50 text-emerald-600"
                          : "bg-orange-50 text-orange-600"
                        }`}>{item.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <footer className="text-center text-xs text-slate-400 py-8">
            © 2026 CloudLab. Built for smarter learning.
          </footer>
        </div>
      </main>
    </div>
  );
}

export default App;
