"use client"

import { useState } from "react"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import {
  User,
  GraduationCap,
  Briefcase,
  Code,
  Languages,
  FolderOpen,
  Star,
  Mail,
  Phone,
  MapPin,
  Calendar,
  Heart,
  Smile,
  Sparkles,
  Github,
  Facebook,
} from "lucide-react"
import { Mali } from "next/font/google"

const mali = Mali({
  subsets: ["thai", "latin"],
  weight: ["200", "300", "400", "500", "600", "700"],
  display: "swap",
})

const navigationItems = [
  { id: "personal", label: "ข้อมูลส่วนตัว", icon: User },
  { id: "education", label: "การศึกษา", icon: GraduationCap },
  { id: "experience", label: "ประสบการณ์", icon: Briefcase },
  { id: "skills", label: "ทักษะ", icon: Code },
  { id: "languages", label: "ภาษา", icon: Languages },
  { id: "projects", label: "โปรเจกต์", icon: FolderOpen },
  { id: "additional", label: "ทักษะเพิ่มเติม", icon: Star },
]

export default function ModernCV() {
  const [activeSection, setActiveSection] = useState("personal")

  const renderPersonalInfo = () => (
    <div className="space-y-6">
      <div className="text-center space-y-4">
        <Avatar className="w-32 h-32 mx-auto border-4 border-white shadow-lg">
          <AvatarImage src="/0002.jpg" alt="สุวิมล หงษ์อ่อน" className="object-cover" />
          <AvatarFallback className="text-2xl bg-gradient-to-br from-blue-500 to-purple-600 text-white">
            สว
          </AvatarFallback>
        </Avatar>
        <div>
          <h1 className="text-3xl font-extralight text-gray-800 mb-2">นางสาว สุวิมล หงษ์อ่อน</h1>
          <p className="text-lg text-gray-600 mb-1">(แตงกวา)</p>
          <p className="text-xl font-light text-blue-600 mb-3">Full-Stack Developer</p>
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
            <span>สามารถเขียนโค้ดและออกแบบเว็บไซต์แต่อยากเป็น Project Coordinator </span>
            <Heart className="w-4 h-4 text-red-500" />
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600 mb-2">
            <span>ชอบเรียนรู้สิ่งใหม่ ๆ เสมอ และเป็นคนสวย </span>
            <Smile className="w-4 h-4 text-yellow-500" />
          </div>
          <div className="flex items-center justify-center gap-2 text-gray-600">
            <span>สนใจด้าน Cybersecurity และการวิเคราะห์ข้อมูล</span>
            <Sparkles className="w-4 h-4 text-purple-500" />
          </div>
        </div>
      </div>

      <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="text-lg font-light text-gray-800">ข้อมูลติดต่อ</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-3">
              <Calendar className="w-5 h-5 text-blue-500" />
              <div>
                <p className="text-sm text-gray-600">วันเกิด</p>
                <p className="font-light">22 มิถุนายน 2545</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <User className="w-5 h-5 text-green-500" />
              <div>
                <p className="text-sm text-gray-600">อายุ</p>
                <p className="font-light">23 ปี</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-5 h-5 text-purple-500" />
              <div>
                <p className="text-sm text-gray-600">โทรศัพท์</p>
                <p className="font-light">084-223-7390</p>
              </div>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-5 h-5 text-red-500" />
              <div>
                <p className="text-sm text-gray-600">อีเมล</p>
                <p className="font-light">suwi.h2002@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="flex items-start gap-3">
            <MapPin className="w-5 h-5 text-orange-500 mt-1" />
            <div>
              <p className="text-sm text-gray-600">ที่อยู่</p>
              <p className="font-light">78/50 เพชรเกษม 106 กรุงเทพมหานคร</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderEducation = () => (
    <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-light text-gray-800">
          <GraduationCap className="w-5 h-5 text-blue-500" />
          การศึกษา
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-normal text-gray-800">ระดับปริญญาตรี </h3>
            <p className="text-blue-600 font-light">มหาวิทยาลัยเอเชียอาคเนย์</p>
            <p className="text-gray-600">คณะศิลปศาสตร์และวิทยาศาสตร์</p>
            <p className="text-gray-600">สาขาเทคโนโลยีดิจิทัลและนวัตกรรม</p>
            <Badge variant="secondary" className="mt-2">
              สำเร็จการศึกษาหลักสูตรเทคโนโลยีบัณฑิต
            </Badge>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderExperience = () => (
    <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-light text-gray-800">
          <Briefcase className="w-5 h-5 text-green-500" />
          ประสบการณ์ฝึกงาน
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border-l-4 border-green-500 pl-4">
          <h3 className="font-normal text-gray-800">นักศึกษาฝึกงาน – แผนกอาชญากรรมทางเทคโนโลยี (PCT)</h3>
          <p className="text-green-600 font-light">สถานีตำรวจภูธรกระทุ่มแบน</p>
          <p className="text-gray-600 text-sm mb-3">มิ.ย. – ก.ค. 2567</p>

          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-gray-700">วิเคราะห์ข้อมูลคดีไซเบอร์</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-gray-700">จัดเตรียมเอกสารและข้อมูล</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-gray-700">ทำ Dashboard และรายงาน</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-gray-700">เขียน Script/Tool สำหรับช่วยงาน</p>
            </div>
            <div className="flex items-start gap-2">
              <div className="w-2 h-2 bg-green-500 rounded-full mt-2"></div>
              <p className="text-gray-700">ออกแบบระบบจัดเก็บข้อมูล</p>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderSkills = () => (
    <div className="space-y-6">
      <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg font-light text-gray-800">
            <Code className="w-5 h-5 text-purple-500" />
            ทักษะและเครื่องมือ
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div>
            <h4 className="font-normal text-gray-800 mb-3">Frontend / Full-Stack</h4>
            <div className="flex flex-wrap gap-2">
              {["HTML", "CSS", "JavaScript", "React", "PHP", "Node.js", "Next.js"].map((skill) => (
                <Badge key={skill} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-normal text-gray-800 mb-3">Backend & API</h4>
            <div className="flex flex-wrap gap-2">
              {["Express.js", "RESTful API", "Supabase"].map((skill) => (
                <Badge key={skill} variant="outline" className="bg-green-50 text-green-700 border-green-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-normal text-gray-800 mb-3">Database</h4>
            <div className="flex flex-wrap gap-2">
              {["MySQL", "MongoDB", "Supabase (PostgreSQL)"].map((skill) => (
                <Badge key={skill} variant="outline" className="bg-orange-50 text-orange-700 border-orange-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-normal text-gray-800 mb-3">Cybersecurity</h4>
            <div className="flex flex-wrap gap-2">
              {["วิเคราะห์ log", "ตรวจพฤติกรรมผิดปกติ"].map((skill) => (
                <Badge key={skill} variant="outline" className="bg-red-50 text-red-700 border-red-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-normal text-gray-800 mb-3">AI Tools</h4>
            <div className="flex flex-wrap gap-2">
              {["ChatGPT", "Copilot", "Gemini", "Claude"].map((skill) => (
                <Badge key={skill} variant="outline" className="bg-purple-50 text-purple-700 border-purple-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          <div>
            <h4 className="font-normal text-gray-800 mb-3">อื่น ๆ</h4>
            <div className="flex flex-wrap gap-2">
              {[
                "Git",
                "Postman",
                "VS Code",
                "Figma",
                "Python",
                "Microsoft Office",
                "Google Docs/Sheets",
                "PDF Tools",
              ].map((skill) => (
                <Badge key={skill} variant="outline" className="bg-gray-50 text-gray-700 border-gray-200">
                  {skill}
                </Badge>
              ))}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )

  const renderLanguages = () => (
    <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-light text-gray-800">
          <Languages className="w-5 h-5 text-indigo-500" />
          ทักษะด้านภาษา
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex items-center justify-between">
          <span className="font-light text-gray-800">ภาษาไทย</span>
          <Badge className="bg-green-100 text-green-800">ดีเยี่ยม</Badge>
        </div>
        <div className="flex items-center justify-between">
          <span className="font-light text-gray-800">ภาษาอังกฤษ</span>
          <Badge variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
            ฟัง-พูด-อ่าน-เขียน ระดับใช้งานทั่วไป
          </Badge>
        </div>
      </CardContent>
    </Card>
  )

  const renderProjects = () => (
    <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-light text-gray-800">
          <FolderOpen className="w-5 h-5 text-yellow-500" />
          โปรเจกต์จบการศึกษา
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="border-l-4 border-yellow-500 pl-4">
          <h3 className="font-normal text-gray-800 text-xl mb-2">Area – เว็บไซต์ขายที่ดินออนไลน์</h3>
          <Badge className="mb-3 bg-yellow-100 text-yellow-800">Full-Stack Developer</Badge>

          <div className="mb-4">
            <h4 className="font-light text-gray-800 mb-2">เทคโนโลยีที่ใช้:</h4>
            <div className="flex flex-wrap gap-2">
              {["Next.js", "TypeScript", "Tailwind CSS", "Supabase PostgreSQL"].map((tech) => (
                <Badge key={tech} variant="outline" className="bg-blue-50 text-blue-700 border-blue-200">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          <div className="space-y-2">
            <h4 className="font-light text-gray-800">รายละเอียด:</h4>
            <div className="space-y-2">
              {[
                "พัฒนาเว็บแอปสำหรับขายที่ดิน",
                "ออกแบบ UI ด้วย Figma + Tailwind CSS",
                "สร้างระบบสมาชิก พร้อมล็อกอิน",
                "เชื่อมต่อฐานข้อมูลด้วย Supabase",
                "เพิ่มระบบแชท คอมเมนต์ และอัปโหลดภาพ",
                "รองรับทุกอุปกรณ์ PC และมือถือ",
              ].map((detail, index) => (
                <div key={index} className="flex items-start gap-2">
                  <div className="w-2 h-2 bg-yellow-500 rounded-full mt-2"></div>
                  <p className="text-gray-700">{detail}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mt-4">
            <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
              <a href="https://area-51.vercel.app/" target="_blank" rel="noopener noreferrer">
                <FolderOpen className="w-4 h-4" />
                ดูเว็บไซต์
              </a>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  )

  const renderAdditionalSkills = () => (
    <Card className="backdrop-blur-sm bg-white/80 border-0 shadow-lg">
      <CardHeader>
        <CardTitle className="flex items-center gap-2 text-lg font-light text-gray-800">
          <Star className="w-5 h-5 text-pink-500" />
          ทักษะเพิ่มเติม
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {[
          {
            icon: "📋",
            title: "การจัดการเอกสาร / รายงาน",
            description: "จัดทำ Dashboard, Report, ใช้ Excel, Google Sheets, Microsoft Office ได้ดี",
          },
          {
            icon: "📈",
            title: "การติดตามความคืบหน้า / วิเคราะห์ข้อมูล",
            description: "เคยวิเคราะห์ log, ทำงานกับข้อมูลเชิงเทคนิค",
          },
          {
            icon: "⚙️",
            title: "พื้นฐานด้านเทคนิค",
            description: "เข้าใจระบบเว็บไซต์ ระบบฐานข้อมูล API และระบบจัดเก็บข้อมูล",
          },
          {
            icon: "🤝",
            title: "การประสานงาน / สื่อสาร",
            description: "มีทักษะในการเขียน รายงาน พูดคุยกับทีม ช่วยวางแผน",
          },
          {
            icon: "🤖",
            title: "ทักษะ AI และเทคโนโลยี",
            description: "ใช้เครื่องมืออย่าง ChatGPT, Copilot ฯลฯ เพื่อวางระบบและช่วยงาน",
          },
          {
            icon: "🎯",
            title: "ความใส่ใจและมีระบบในการทำงาน",
            description: "จากประสบการณ์ฝึกงานกับแผนกอาชญากรรมไซเบอร์ ที่ต้องมีความละเอียดสูงและเชื่อมต่อระบบจัดเก็บข้อมูล",
          },
        ].map((skill, index) => (
          <div key={index} className="flex items-start gap-3 p-3 rounded-lg bg-gray-50">
            <span className="text-2xl">{skill.icon}</span>
            <div>
              <h4 className="font-light text-gray-800 mb-1">{skill.title}</h4>
              <p className="text-gray-600 text-sm">{skill.description}</p>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  )

  const renderContent = () => {
    switch (activeSection) {
      case "personal":
        return renderPersonalInfo()
      case "education":
        return renderEducation()
      case "experience":
        return renderExperience()
      case "skills":
        return renderSkills()
      case "languages":
        return renderLanguages()
      case "projects":
        return renderProjects()
      case "additional":
        return renderAdditionalSkills()
      default:
        return renderPersonalInfo()
    }
  }

  return (
    <div className={`min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 ${mali.className}`}>
      {/* Header */}
      <div className="sticky top-0 z-50 backdrop-blur-md bg-white/80 border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Avatar className="w-10 h-10">
                <AvatarImage src="/0002.jpg" alt="สุวิมล หงษ์อ่อน" className="object-cover" />
                <AvatarFallback className="bg-gradient-to-br from-blue-500 to-purple-600 text-white text-sm">
                  สว
                </AvatarFallback>
              </Avatar>
              <div>
                <h2 className="font-light text-gray-800">สุวิมล หงษ์อ่อน</h2>
                <p className="text-sm text-gray-600">Full-Stack Developer</p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                <a href="https://github.com/SuwiMoLh" target="_blank" rel="noopener noreferrer">
                  <Github className="w-4 h-4" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-2 bg-transparent" asChild>
                <a href="https://web.facebook.com/SuwiMoLhz/" target="_blank" rel="noopener noreferrer">
                  <Facebook className="w-4 h-4" />
                  Facebook
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          {/* Navigation Sidebar */}
          <div className="lg:col-span-1">
            <Card className="sticky top-24 backdrop-blur-sm bg-white/80 border-0 shadow-lg">
              <CardContent className="p-4">
                <nav className="space-y-2">
                  {navigationItems.map((item) => {
                    const Icon = item.icon
                    return (
                      <button
                        key={item.id}
                        onClick={() => setActiveSection(item.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left transition-all duration-200 ${
                          activeSection === item.id
                            ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md"
                            : "text-gray-700 hover:bg-gray-100"
                        }`}
                      >
                        <Icon className="w-4 h-4" />
                        <span className="font-light">{item.label}</span>
                      </button>
                    )
                  })}
                </nav>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="transition-all duration-300 ease-in-out">{renderContent()}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
