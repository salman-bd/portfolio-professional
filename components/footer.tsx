import Link from "next/link"
import { Github, Linkedin, Mail, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4">
            <h3 className="text-2xl font-bold gradient-text">Ariful Islam Shaon</h3>
            <p className="text-muted-foreground">
              Accounts In-Charge with expertise in financial management and accounting software.
            </p>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-primary">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary">
                About
              </Link>
              <Link href="/experience" className="text-muted-foreground hover:text-primary">
                Experience
              </Link>
              <Link href="/skills" className="text-muted-foreground hover:text-primary">
                Skills
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="flex flex-col space-y-2">
              <a
                href="tel:+8801787878714"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
              >
                <Phone className="h-4 w-4" />
                <span>+880 1787878714</span>
              </a>
              <a
                href="mailto:arifulislamshaon028@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary"
              >
                <Mail className="h-4 w-4" />
                <span>arifulislamshaon028@gmail.com</span>
              </a>
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="GitHub"
                >
                  <Github className="h-5 w-5" />
                </a>
                <a
                  href="https://linkedin.com/in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Ariful Islam Shaon. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
