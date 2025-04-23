import Link from "next/link"
import { Linkedin, Mail, Phone, Instagram, Twitter, Facebook } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          <div className="space-y-4 animate-slide-up">
            <h3 className="text-2xl font-bold gradient-text">Ariful Islam Shaon</h3>
            <p className="text-muted-foreground">
              Accounts In-Charge with expertise in financial management and accounting software.
            </p>
          </div>
          <div className="space-y-4 animate-slide-up animate-delay-100">
            <h4 className="text-lg font-semibold">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <Link href="/" className="text-muted-foreground hover:text-primary transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                About
              </Link>
              <Link href="/experience" className="text-muted-foreground hover:text-primary transition-colors">
                Experience
              </Link>
              <Link href="/skills" className="text-muted-foreground hover:text-primary transition-colors">
                Skills
              </Link>
              <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                Contact
              </Link>
            </nav>
          </div>
          <div className="space-y-4 animate-slide-up animate-delay-200">
            <h4 className="text-lg font-semibold">Contact</h4>
            <div className="flex flex-col space-y-2">
              <Link
                href="tel:+8801787878714"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>+880 1787878714</span>
              </Link>
              <Link
                href="mailto:arifulislamshaon028@gmail.com"
                className="flex items-center space-x-2 text-muted-foreground hover:text-primary transition-colors"
              >
                <Mail className="h-4 w-4" />
                <span>arifulislamshaon028@gmail.com</span>
              </Link>
              <div className="flex space-x-4 pt-2">
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-rose-900 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-rose-900 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-rose-900  flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </Link>
                <Link
                  href="#"
                  className="w-10 h-10 rounded-full bg-rose-900 flex items-center justify-center hover:bg-primary/20 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </Link>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t pt-8 text-center animate-fade-in">
          <div className="flex flex-col md:flex-row items-center justify-center gap-4">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} Ariful Islam Shaon. All rights reserved.
            </p>
            <p className="text-sm text-muted-foreground">
              Developed by: <Link href='https://www.salmanbd.com/' target="_balnk"><strong><span>Md. Abu Salman</span></strong> </Link>
            </p>
          </div>

        </div>
      </div>
    </footer>
  )
}
