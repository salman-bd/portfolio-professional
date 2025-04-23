import { Briefcase, GraduationCap, User } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="section-heading">About Me</h1>
              <p className="mt-6 text-xl text-muted-foreground">
                I'm Ariful Islam Shaon, an accounting professional with expertise in financial management and accounting
                software. I'm passionate about delivering accurate financial reporting and analysis to help businesses
                make informed decisions.
              </p>
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <Card className="card-hover">
                <CardHeader>
                  <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                    <User className="h-6 w-6" />
                  </div>
                  <CardTitle>Personal Details</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h3 className="font-semibold">Name</h3>
                    <p className="text-muted-foreground">Ariful Islam Shaon</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Email</h3>
                    <p className="text-muted-foreground">arifulislamshaon028@gmail.com</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Phone</h3>
                    <p className="text-muted-foreground">01787878714</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Address</h3>
                    <p className="text-muted-foreground">Sabok-68, Raynagor, Sylhet 01, 3100, Sylhet, Sylhet Sadar</p>
                  </div>
                  <div>
                    <h3 className="font-semibold">Date of Birth</h3>
                    <p className="text-muted-foreground">December 5, 1994</p>
                  </div>
                </CardContent>
              </Card>
              <div className="space-y-6">
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle>Professional Summary</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      To work a dynamic and challenging organization with hard work, efficiency, competency, honesty and
                      enthusiasm where I can utilize my personal expertise that ultimately leads to job satisfaction &
                      help to build-up my career.
                    </p>
                  </CardContent>
                </Card>
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle>Special Skills</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Communication</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Teamwork</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Leadership</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <div className="h-2 w-2 rounded-full bg-primary"></div>
                        <span>Time Management</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="card-hover">
                  <CardHeader>
                    <CardTitle>Achievements</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Best Teacher Award 2018</span>
                    </div>
                    <div className="mt-2 flex items-center space-x-2">
                      <div className="h-2 w-2 rounded-full bg-primary"></div>
                      <span>Vice-president of Barlekha Survers Association</span>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Experience & Education Section */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
              <div>
                <div className="mb-8 flex items-center">
                  <Briefcase className="mr-2 h-6 w-6 text-primary" />
                  <h2 className="section-heading">Experience</h2>
                </div>
                <div className="space-y-6">
                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle>Accounts In-Charge {"{Hajj & Umrah}"}</CardTitle>
                      <CardDescription>Latif Travels Pvt. Ltd. | Oct 2022 - Present</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>Daily Statement (Pretty Cash, Bank Transaction & Payment) Authorization</li>
                        <li>Bank Reconciliation</li>
                        <li>Reconciliation of Umrah Tickets with IATA BSP Payment</li>
                        <li>Preparing And Entering Invoices, Journal Entry, Checks & Chart Of Accounts</li>
                        <li>Overseeing Accounts Receivable Monitoring & Reporting</li>
                        <li>Prepare Balance Sheet & Profit & Loss Statement</li>
                      </ul>
                    </CardContent>
                  </Card>
                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle>Business Executive Partner</CardTitle>
                      <CardDescription>Netizen It Limited | Nov 2018 - Oct 2020</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground">
                        Complete solution of school management such as result, attendance, tuition fees etc.
                      </p>
                    </CardContent>
                  </Card>
                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle>Accountant</CardTitle>
                      <CardDescription>Shishu Shiksha Academy | Feb 2016 - Nov 2020</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>Prepare All Kinds Of Voucher</li>
                        <li>Daily Statement & Pretty Cash</li>
                        <li>Overseeing Account Receivable & Account Payable</li>
                        <li>Prepare Yearly profit & Loss Statement</li>
                        <li>Prepare Yearly Budget</li>
                      </ul>
                    </CardContent>
                  </Card>
                </div>
              </div>
              <div>
                <div className="mb-8 flex items-center">
                  <GraduationCap className="mr-2 h-6 w-6 text-primary" />
                  <h2 className="section-heading">Education</h2>
                </div>
                <div className="space-y-6">
                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle>Bachelor/Honors in Business Study</CardTitle>
                      <CardDescription>MADAN MOHON COLLEGE, SYLHET | 2019</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Major: Accounting</span>
                        <span className="text-muted-foreground">Result: 2.90</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle>Higher Secondary (HSC)</CardTitle>
                      <CardDescription>Jalabad College Sylhet | 2013</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Result: 4.90</span>
                      </div>
                    </CardContent>
                  </Card>
                  <Card className="card-hover">
                    <CardHeader>
                      <CardTitle>Secondary (SSC)</CardTitle>
                      <CardDescription>Kathal Tali High School | 2011</CardDescription>
                    </CardHeader>
                    <CardContent>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Result: 4.50</span>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
