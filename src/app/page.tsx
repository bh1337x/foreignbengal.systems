import Link from "next/link"
import { Button } from "~/components/ui/button"
import { Input } from "~/components/ui/input"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "~/components/ui/card"
import { CheckCircle2, Code, Cpu, Globe, LayoutDashboard, Zap } from 'lucide-react'

export default function LandingPage() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="px-4 lg:px-6 h-14 flex items-center">
        <Link className="flex items-center justify-center" href="#">
          <Cpu className="h-6 w-6" />
          <span className="sr-only">SaaS Company</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Features
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Pricing
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            About
          </Link>
          <Link className="text-sm font-medium hover:underline underline-offset-4" href="#">
            Contact
          </Link>
        </nav>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
                  Revolutionize Your Workflow
                </h1>
                <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl dark:text-gray-400">
                  Boost productivity and streamline your processes with our cutting-edge SaaS platform.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex space-x-2">
                  <Input className="max-w-lg flex-1" placeholder="Enter your email" type="email" />
                  <Button type="submit">Get Started</Button>
                </form>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Start your free 14-day trial. No credit card required.
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-100 dark:bg-gray-800">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Features</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <LayoutDashboard className="h-10 w-10 mb-2" />
                  <CardTitle>Intuitive Dashboard</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Get a bird&apos;s-eye view of your operations with our easy-to-use dashboard.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Zap className="h-10 w-10 mb-2" />
                  <CardTitle>Lightning Fast</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Experience blazing fast performance that keeps up with your business needs.</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <Globe className="h-10 w-10 mb-2" />
                  <CardTitle>Global Accessibility</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>Access your data and tools from anywhere in the world, at any time.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl text-center mb-12">Pricing</h2>
            <div className="grid gap-6 lg:grid-cols-3 lg:gap-12">
              <Card>
                <CardHeader>
                  <CardTitle>Basic</CardTitle>
                  <CardDescription>For small teams getting started</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$29/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                      Up to 5 users
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                      Basic analytics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                      24/7 support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Pro</CardTitle>
                  <CardDescription>For growing businesses</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">$99/mo</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                      Up to 20 users
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                      Advanced analytics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                      Priority support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Get Started</Button>
                </CardFooter>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Enterprise</CardTitle>
                  <CardDescription>For large-scale operations</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-4xl font-bold">Custom</p>
                  <ul className="mt-4 space-y-2">
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                      Unlimited users
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                      Custom analytics
                    </li>
                    <li className="flex items-center">
                      <CheckCircle2 className="text-green-500 mr-2 h-5 w-5" />
                      Dedicated support
                    </li>
                  </ul>
                </CardContent>
                <CardFooter>
                  <Button className="w-full">Contact Sales</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t">
        <p className="text-xs text-gray-500 dark:text-gray-400">© 2024 SaaS Company. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4" href="#">
            Privacy
          </Link>
        </nav>
      </footer>
    </div>
  )
}

