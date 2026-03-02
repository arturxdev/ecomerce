import {
  BadgeCheck,
  CalendarDays,
  Candy,
  Facebook,
  Instagram,
  Menu,
  Package,
  PartyPopper,
  Ruler,
  Truck,
  Utensils,
  Waves,
} from "lucide-react";

export default function Home() {
  return (
    <div className="relative flex min-h-screen w-full flex-col overflow-x-hidden bg-white font-display text-slate-900 antialiased">
      <header className="sticky top-0 z-50 w-full border-b border-orange-100 bg-white/95 backdrop-blur">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2">
            <div className="flex size-8 items-center justify-center rounded-lg bg-primary text-white">
              <PartyPopper className="size-4" />
            </div>
            <span className="text-xl font-bold tracking-tight text-slate-900">
              Festejos Aurora
            </span>
          </div>
          <nav className="hidden items-center gap-8 md:flex">
            <a
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              href="#"
            >
              Home
            </a>
            <a
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              href="#"
            >
              Catalogue
            </a>
            <a
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              href="#"
            >
              About Us
            </a>
            <a
              className="text-sm font-medium text-slate-600 transition-colors hover:text-primary"
              href="#"
            >
              Contact
            </a>
          </nav>
          <div className="flex items-center gap-4">
            <button className="hidden items-center justify-center rounded-lg bg-primary px-4 py-2 text-sm font-bold text-white shadow-sm transition-all hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary sm:flex">
              Book Now
            </button>
            <button className="p-2 text-slate-600 md:hidden">
              <Menu className="size-5" />
            </button>
          </div>
        </div>
      </header>

      <section className="relative overflow-hidden py-12 sm:py-16 lg:py-20 xl:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8">
            <div className="max-w-2xl">
              <div className="mb-6 inline-flex items-center rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-sm font-medium text-primary">
                <span className="mr-2 flex size-2 rounded-full bg-primary" />
                Premium Party Equipment
              </div>
              <h1 className="mb-6 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Make Your Party{" "}
                <span className="relative inline-block text-primary">
                  Unforgettable
                  <svg
                    className="-z-10 absolute -bottom-2 left-0 h-3 w-full text-orange-300"
                    preserveAspectRatio="none"
                    viewBox="0 0 100 10"
                  >
                    <path
                      d="M0 5 Q 50 10 100 5"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="8"
                    />
                  </svg>
                </span>
              </h1>
              <p className="mt-4 mb-8 max-w-lg text-lg text-slate-600">
                Premium bounce houses, tables, and chairs for every occasion.
                We bring the fun, you make the memories. Book your equipment
                today with instant confirmation.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button className="inline-flex items-center justify-center rounded-lg bg-secondary px-6 py-3.5 text-base font-bold text-white shadow-sm transition-all hover:bg-green-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-secondary">
                  <CalendarDays className="mr-2 size-5" />
                  View Catalogue
                </button>
                <button className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-6 py-3.5 text-base font-bold text-slate-900 shadow-sm transition-all hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-slate-200">
                  Contact Support
                </button>
              </div>
              <div className="mt-10 flex items-center gap-4 text-sm text-slate-500">
                <div className="flex -space-x-2">
                  <div
                    className="size-8 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBZkt_RKFYJ-CapqZDrWULaN94-m0RWG_fJZu1CLEaW30oNRedB_B2yZJsma_NfNIvf7mMgU3bShYejI1QloCauCxFSVftSuvlpjPljNw83h4kI9ENrVonr6o9UeBiJ2kqIN05kVrUwxw3DO9IRS9uGfbtBODJpq3wYoVAu-o4V6wOTn9mIn7lAc7ZvNqfYPQjRF29lQTLuvGYely7rf6RnLYjfk5s9Ip3TqOfg6nNLF5Ei9eJDatQJ8YaIdmrfPw9ifhSeNSQcV6HJ')",
                    }}
                  />
                  <div
                    className="size-8 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuClurY5WkPoNZNQGlntcx8KKdfXMDbTGsznb7FzNsHW7pfyRAeH1-ydGnb9D5ZfvOgJEglL1BqPrDxtaMevmFvLIDdcK-M60xmzBqECJ7HB6HgG-QQb1D3DExphhLLUyY5YYjS3NHp_oBoM8C1TZRR8v_tPzGg_fkZfWlvnOCPQi8MCNeThWhs4NikCHafbuZIdf8slmj6elL4-oVdB9imDIjqmh2wIOx8Phxnchs0eaqJV_6X8CHTqI_d9oB670rBjpbqUoXcxS49l')",
                    }}
                  />
                  <div
                    className="size-8 rounded-full border-2 border-white bg-slate-200 bg-cover bg-center"
                    style={{
                      backgroundImage:
                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDsySJZAQBiEassa3rb7JbTYKBPgSUONY3tYsSuHicmQwmG1ol6YcsVdFglMP2KVv3LzPb7eayu39-otrZlc6bOE5C1y49PEfy6SWmR32AMIiZR3iFJkLALkOBzWhn_vgtSaeaAnknZrPBwdrKnZMZzm8u1ZSI-Mrh5npb5D674-QZ5oOWJLEizb1UfxzFhHrIVqlDqUE9I3geuNSZQBMlXdG8pFQ1wDtS6pjQKZbnAsAmUB6lrIo5io0KW3ww4msLn-yvk3Dct-9V9')",
                    }}
                  />
                </div>
                <p>Trusted by 500+ happy families</p>
              </div>
            </div>
            <div className="relative w-full max-w-lg lg:ml-auto lg:max-w-none">
              <div className="relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-100 shadow-2xl">
                <div
                  className="absolute inset-0 bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCWQyE9DMg-JDkm060LzSQqQ2STADSY1PSRyBso20F6UfgOrYYyfTGz0UYRmvgQilpWxSMynslYC6gXD48d6oFNC8-lC7FAHN0uQeizdgkJE4imQ6I4d-apMwbW8aiPU60-OFjPstMwtZi-fsmpiRD_6c59p4f7WNAUJU7lwYdyfsW-UYhr1-XH5NFAUVmB7P1D7Y5YOSjunk3Hy0ne5yzgtqcMQLcUpw04tr2K-_seDR3Xtv0lmhIx05dHSizEREp582Nk4xlQcDVA')",
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-black/10 to-transparent" />
              </div>
              <div className="absolute -bottom-6 -left-6 hidden rounded-xl border border-slate-100 bg-white p-4 shadow-xl sm:block">
                <div className="flex items-center gap-3">
                  <div className="flex size-10 items-center justify-center rounded-full bg-green-100 text-green-600">
                    <BadgeCheck className="size-5" />
                  </div>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Safety Certified
                    </p>
                    <p className="text-xs text-slate-500">
                      Inspected Equipment
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Our Equipment
              </h2>
              <p className="mt-2 text-slate-600">
                Browse our selection of party essentials available for rent.
              </p>
            </div>
            <div className="no-scrollbar flex items-center gap-2 overflow-x-auto pb-2 sm:pb-0">
              <button className="whitespace-nowrap rounded-full bg-primary px-5 py-2 text-sm font-semibold text-white shadow-sm transition-colors hover:bg-orange-600">
                All Items
              </button>
              <button className="whitespace-nowrap rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200">
                Bounce Houses
              </button>
              <button className="whitespace-nowrap rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200">
                Tables &amp; Chairs
              </button>
              <button className="whitespace-nowrap rounded-full bg-slate-100 px-5 py-2 text-sm font-semibold text-slate-600 transition-colors hover:bg-slate-200">
                Concessions
              </button>
            </div>
          </div>

          <div className="columns-1 space-y-6 gap-6 sm:columns-2 lg:columns-3">
            <div className="group relative break-inside-avoid rounded-xl border border-slate-100 bg-background-light p-4 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-200">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB8so17SyQHHNMJD7LpBCEwE9u44Ftgv-luDMI68VSqihOMkvrIAhsNdYVt5DD3NXpSazGd0UJgioXKd6KaeXEwHm8Zma9CHn6F-D0JsSOjwZg2eW4j20goCLutYoNAnzwZYv9Di9PtaxLkokMF5QsnlVVNIUIN5Nc9Ryw14a4zcCTXylkcBeTOL-r-FNh4xAyJ4L6rsnZ_wJuT2FQEACCamyLbZBl67wBKZwBEF1_w2Y2DuZ5qc5C2TMnStVhTsGLzBt3FaHNoWy9T')",
                  }}
                />
              </div>
              <div className="mt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Royal Castle Bounce House
                    </h3>
                    <p className="text-sm text-slate-500">
                      Ideal for ages 3-10
                    </p>
                  </div>
                  <span className="rounded-md bg-orange-100 px-2 py-1 text-xs font-bold text-primary">
                    $150/day
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Ruler className="size-4" />
                    15&apos; x 15&apos;
                  </div>
                  <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-green-800">
                    Reservar
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative break-inside-avoid rounded-xl border border-slate-100 bg-background-light p-4 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-200">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBnmT_IDwe31z4U75mxh8mgtt3aMAWaiT57-LE5Hv7wBlqVo7Xr7ZqGXbWlHuVWTgnh5jzPZ39qpWYQTDzgBlcE8UYS6BAifOMQWh7BN-qg9rRsV2Iyy9ezcwUfiXg_cq4vTU1HVvZHvXINlZBraJaprWe1fDUiJsDBKMPgp_jSF087P_d2gI8yKqVvqIUC_Uvp2eHN8DM4HWtJc3JsF20TVU-PBxOnmmWDwUDAWUTlJpF2vtKlRLLvp3vXLKCz2b2TXebC_S4vevNf')",
                  }}
                />
              </div>
              <div className="mt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Folding Chairs (Set of 10)
                    </h3>
                    <p className="text-sm text-slate-500">
                      Durable &amp; lightweight
                    </p>
                  </div>
                  <span className="rounded-md bg-orange-100 px-2 py-1 text-xs font-bold text-primary">
                    $25/day
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Package className="size-4" />
                    10 Pack
                  </div>
                  <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-green-800">
                    Reservar
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative break-inside-avoid rounded-xl border border-slate-100 bg-background-light p-4 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="aspect-[16/9] w-full overflow-hidden rounded-lg bg-slate-200">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuA4_XvMMGrtHq_O33tsddVospqxEIkEzg6Hhid_kSIJjTR7vU_-Gzb4H1BA1LRuscVnVi-WN6SoQvXF-e023BnLYLsRF7P1T1unErjYURLzLlLVbIDAFH5di5Jlyjvwihe2i61M-UYyAGie18mey4Wy8p7JD6Ogvo434Dy5_TFyWPraVD_IA3r8rE6QXh293mrXIpby9VBI-OECccFZqjv1-QkGaUQqgrsCiizLBxg98eHyQDVUGf4-k9QVLmxGj3y1nBP1Id1AwaPB')",
                  }}
                />
              </div>
              <div className="mt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Round Banquet Tables
                    </h3>
                    <p className="text-sm text-slate-500">
                      Seats 8-10 people
                    </p>
                  </div>
                  <span className="rounded-md bg-orange-100 px-2 py-1 text-xs font-bold text-primary">
                    $15/day
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Utensils className="size-4" />
                    60&quot; Round
                  </div>
                  <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-green-800">
                    Reservar
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative break-inside-avoid rounded-xl border border-slate-100 bg-background-light p-4 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="aspect-[3/4] w-full overflow-hidden rounded-lg bg-slate-200">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCxpkFizJ6j4KgDkmL8OI7_Z9xXfqMmYLXZw8BTTiOO1LUgJJvBhmkzcy8Y5I0PR5ofpWJDKbJZBvGL8y-mYuO1pr9w4JQ5MzbPLH0EQ7mgGw-WZFtrnDbGdP6cMF4LxIQHVyIwssuIKpk9yy6eIyZ3tHP8Je8paLVkg8sjsLwsEPJTZjHXt6Piv9dBrOOLng02Tpo3Yb3YgkmO0h9iKJpCjPIDebkm0ctzBnMcG8p6zb6XjPCJSrNS56SR12FQuSTj0RKnmmWg9jOY')",
                  }}
                />
              </div>
              <div className="mt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Vintage Popcorn Machine
                    </h3>
                    <p className="text-sm text-slate-500">
                      Includes supplies for 50
                    </p>
                  </div>
                  <span className="rounded-md bg-orange-100 px-2 py-1 text-xs font-bold text-primary">
                    $60/day
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Utensils className="size-4" />
                    Concession
                  </div>
                  <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-green-800">
                    Reservar
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative break-inside-avoid rounded-xl border border-slate-100 bg-background-light p-4 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-slate-200">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCn6WDE6kgoaqRrkEz4goVNcRkIKITwuEyNF-7BJl4TRefIgBTJSwf5C3auRT24wWjA9xR1MqRL0tElG2txGfXXhTx7j4BHpoqvt7lJIJkVe0OKGrqJ8IQCGzwUGfN4MXruXgAEVF_-oKbxSWI521swD6ma7r6j1YgBbjwj5qEtuaZTLBSiEmcl3zlXLKJh63pig8D-aQ6ue7A7oQ35iyq4DYWwBPJXh2E_vFpFjVI0DNKVutPx0gWLP9PH8QvmRkgXaDhl87Fpg79t')",
                  }}
                />
              </div>
              <div className="mt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Tropical Water Slide
                    </h3>
                    <p className="text-sm text-slate-500">
                      Wet or dry use
                    </p>
                  </div>
                  <span className="rounded-md bg-orange-100 px-2 py-1 text-xs font-bold text-primary">
                    $225/day
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Waves className="size-4" />
                    18&apos; High
                  </div>
                  <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-green-800">
                    Reservar
                  </button>
                </div>
              </div>
            </div>

            <div className="group relative break-inside-avoid rounded-xl border border-slate-100 bg-background-light p-4 shadow-sm transition-all duration-300 hover:shadow-lg">
              <div className="aspect-square w-full overflow-hidden rounded-lg bg-slate-200">
                <div
                  className="h-full w-full bg-cover bg-center transition-transform duration-500 group-hover:scale-105"
                  style={{
                    backgroundImage:
                      "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCdA0XkQX_AfTb57yDnFd8cPSaGQCww99GQZLDekdsBwdFJPZg3fewMIXMIT8gGBxUqTd7UJXESLa_sMDDscQurGpLueRfSU4PxyDMJ5f0RVFK3jFiYDe52G9xEiqwjPUDfQMvdmSAHGWLHUcia9JKZP4vz8SDvLzCqGkD6o05JfJ0p9o7Rhhb0H1ozZk0jJ8Bq6_EaSgoVGJVmVlKfXqgOZQG61afz0aKYevxS4aVueLNGEMzraLN1NVwU2lybbuziFJRrxqAQn1rB')",
                  }}
                />
              </div>
              <div className="mt-4">
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      Cotton Candy Maker
                    </h3>
                    <p className="text-sm text-slate-500">
                      Sweet treat favorite
                    </p>
                  </div>
                  <span className="rounded-md bg-orange-100 px-2 py-1 text-xs font-bold text-primary">
                    $55/day
                  </span>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center gap-1 text-xs text-slate-500">
                    <Candy className="size-4" />
                    Machine
                  </div>
                  <button className="rounded-lg bg-secondary px-4 py-2 text-sm font-bold text-white shadow-sm transition-colors hover:bg-green-800">
                    Reservar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative isolate overflow-hidden bg-white py-16 sm:py-24 lg:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-2">
            <div className="max-w-xl lg:max-w-lg">
              <h2 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                Planning a big event?
              </h2>
              <p className="mt-4 text-lg leading-8 text-slate-600">
                Contact us for custom packages, large event discounts, and
                availability for upcoming dates. We&apos;re here to help you
                organize the perfect celebration.
              </p>
              <div className="mt-6 flex max-w-md gap-x-4">
                <label className="sr-only" htmlFor="email-address">
                  Email address
                </label>
                <input
                  autoComplete="email"
                  className="min-w-0 flex-auto rounded-md border-0 bg-slate-50/5 px-3.5 py-2 text-slate-900 shadow-sm ring-1 ring-inset ring-slate-300 focus:ring-2 focus:ring-inset focus:ring-primary sm:text-sm sm:leading-6"
                  id="email-address"
                  name="email"
                  placeholder="Enter your email"
                  required
                  type="email"
                />
                <button
                  className="flex-none rounded-md bg-primary px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-orange-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
                  type="submit"
                >
                  Subscribe
                </button>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-x-8 gap-y-10 pt-2 sm:grid-cols-2 lg:pt-2">
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-slate-200">
                  <Truck className="size-6 text-primary" />
                </div>
                <dt className="mt-4 font-semibold text-slate-900">
                  Delivery &amp; Setup
                </dt>
                <dd className="mt-2 leading-7 text-slate-600">
                  We handle the heavy lifting. All rentals include professional
                  setup and takedown.
                </dd>
              </div>
              <div className="flex flex-col items-start">
                <div className="rounded-md bg-white/5 p-2 ring-1 ring-slate-200">
                  <BadgeCheck className="size-6 text-primary" />
                </div>
                <dt className="mt-4 font-semibold text-slate-900">
                  Clean &amp; Sanitized
                </dt>
                <dd className="mt-2 leading-7 text-slate-600">
                  Safety first. Every item is thoroughly cleaned and inspected
                  before delivery.
                </dd>
              </div>
            </div>
          </div>
        </div>
        <div
          aria-hidden="true"
          className="absolute left-1/2 top-0 -z-10 -translate-x-1/2 blur-3xl xl:-top-6"
        >
          <div
            className="aspect-[1155/678] w-[72.1875rem] bg-gradient-to-tr from-[#f28b0d] to-[#ffdbb0] opacity-30"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </section>

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
          <div className="flex justify-center space-x-6 md:order-2">
            <a
              className="text-slate-400 hover:text-slate-500"
              href="#"
            >
              <span className="sr-only">Facebook</span>
              <Facebook aria-hidden="true" className="h-6 w-6" />
            </a>
            <a
              className="text-slate-400 hover:text-slate-500"
              href="#"
            >
              <span className="sr-only">Instagram</span>
              <Instagram aria-hidden="true" className="h-6 w-6" />
            </a>
          </div>
          <div className="mt-8 md:order-1 md:mt-0">
            <p className="text-center text-xs leading-5 text-slate-500">
              © 2024 Festejos Aurora. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
