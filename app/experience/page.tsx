import { Briefcase, GraduationCap, Award } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ExperiencePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto max-w-3xl text-center">
              <h1 className="section-heading">Experience & Training</h1>
              <p className="mt-6 text-xl text-muted-foreground">
                My professional journey and specialized training in accounting and financial management.
              </p>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 flex items-center">
              <Briefcase className="mr-2 h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Professional Experience</h2>
            </div>
            <div className="space-y-8">
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex flex-col justify-between space-y-1 sm:flex-row sm:items-center sm:space-y-0">
                    <div>
                      <CardTitle>Accounts In-Charge {"{Hajj & Umrah}"}</CardTitle>
                      <CardDescription>Latif Travels Pvt. Ltd.</CardDescription>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Oct 2022 - Present</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>Daily Statement (Pretty Cash, Bank Transaction & Payment) Authorization</li>
                    <li>Bank Reconciliation</li>
                    <li>Reconciliation of Umrah Tickets with IATA BSP Payment and Third-Party Purchase</li>
                    <li>Preparing And Entering Invoices, Journal Entry, Checks & Chart Of Accounts</li>
                    <li>Overseeing Accounts Receivable (Due) Monitoring & Reporting To Management</li>
                    <li>Overseeing All Supplier Payment Monitoring & Reporting To Management</li>
                    <li>Prepare All Kind Of Voucher (Debit & Credit) Voucher</li>
                    <li>Maintaining General Ledger</li>
                    <li>Reconciling Discrepancies In financial entries</li>
                    <li>Prepare Balance Sheet (Yearly)</li>
                    <li>Prepare Monthly & Yearly Profit & Loss Statement</li>
                    <li>Training Junior Accountants</li>
                    <li>Report To The Management occasionally</li>
                    <li>By Using Software Like: Tally, Quickbooks Online, Traacs, Trincome Etc.</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex flex-col justify-between space-y-1 sm:flex-row sm:items-center sm:space-y-0">
                    <div>
                      <CardTitle>Business Executive Partner</CardTitle>
                      <CardDescription>Netizen It Limited</CardDescription>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Nov 2018 - Oct 2020</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Complete solution of school management such as result, attendance, tuition fees etc.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex flex-col justify-between space-y-1 sm:flex-row sm:items-center sm:space-y-0">
                    <div>
                      <CardTitle>Accountant</CardTitle>
                      <CardDescription>Shishu Shiksha Academy</CardDescription>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Feb 2016 - Nov 2020</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>Prepare All Kinds Of Voucher</li>
                    <li>Daily Statement & Pretty Cash</li>
                    <li>Overseeing Account Receivable & Account Payable</li>
                    <li>Prepare Yearly profit & Loss Statement</li>
                    <li>Prepare Yearly Budget</li>
                    <li>Posting All kinds of voucher (Receipt & Payment) To The Software</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Training Section */}
        <section className="bg-background py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 flex items-center">
              <GraduationCap className="mr-2 h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Training & Certifications</h2>
            </div>
            <div className="space-y-8">
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex flex-col justify-between space-y-1 sm:flex-row sm:items-center sm:space-y-0">
                    <div>
                      <CardTitle>Data Analytics</CardTitle>
                      <CardDescription>Ostaad</CardDescription>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Nov 2024 - Jan 2025</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">
                    Ka-6/a, Navana Sylvania, Baridhara Road, Nadda, Gulshan-2, Dhaka-1212
                  </p>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>Advance Excel</li>
                    <li>Logical Functions | FILTER | IF() Condition and Expression of Logical Test</li>
                    <li>Using IF with AND & Carefulness of VLOOKUP Function</li>
                    <li>
                      Using SUMIF, COUNTIF | Using SUMIFS, COUNTIFS, COUNTA, INDEX and MATCH function, MINIFS, MAXIFS,
                      Using AVERAGEIFS
                    </li>
                    <li>Power Pivot, Dax & Data Modelling</li>
                    <li>Data Cleaning Wizards: Power Query</li>
                    <li>Business Dashboard</li>
                    <li>Power BI</li>
                    <li>SQL</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex flex-col justify-between space-y-1 sm:flex-row sm:items-center sm:space-y-0">
                    <div>
                      <CardTitle>Quickbooks Online</CardTitle>
                      <CardDescription>Coders Trust Bangladesh</CardDescription>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Oct 2024 - Dec 2024</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">Online Platform</p>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>Chart Of Accounts _ Customer & Supplier Creation</li>
                    <li>Invoice, Bill, Credit Memo, Debit Memo, Refund Receipt, Supplier Credit Etc.</li>
                    <li>Profit & Loss Statement Analyzing</li>
                    <li>Balance Sheet Analyzing</li>
                    <li>All Kind of Report Creation</li>
                  </ul>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <div className="flex flex-col justify-between space-y-1 sm:flex-row sm:items-center sm:space-y-0">
                    <div>
                      <CardTitle>Computer Office Application</CardTitle>
                      <CardDescription>Upozilla E-center</CardDescription>
                    </div>
                    <div className="rounded-full bg-primary/10 px-3 py-1 text-sm text-primary">Jan 2014</div>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="mb-4 text-muted-foreground">Barlekha, Moulvibazar, Sylhet</p>
                  <ul className="ml-6 list-disc space-y-2 text-muted-foreground">
                    <li>Microsoft Office</li>
                    <li>Microsoft Excel</li>
                    <li>Microsoft Powerpoint</li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Achievements Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mb-12 flex items-center">
              <Award className="mr-2 h-6 w-6 text-primary" />
              <h2 className="text-3xl font-bold">Achievements & Activities</h2>
            </div>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Best Teacher Award 2018</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Recognized for outstanding performance and dedication in teaching.
                  </p>
                </CardContent>
              </Card>
              <Card className="card-hover">
                <CardHeader>
                  <CardTitle>Vice-president of Barlekha Survers Association</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Elected as vice-president, responsible for organizing community activities and representing members.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
