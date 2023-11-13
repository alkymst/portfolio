import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import clsx from 'clsx'

import { Container } from '@/components/Container'
import {
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
  TwitterIcon,
} from '@/components/SocialIcons'
import portraitImage from '@/images/portrait.jpg'

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string
  href: string
  icon: React.ComponentType<{ className?: string }>
  children: React.ReactNode
}) {
  return (
    <li className={clsx(className, 'flex')}>
      <Link
        href={href}
        className="group flex text-sm font-medium text-zinc-800 transition hover:text-teal-500 dark:text-zinc-200 dark:hover:text-teal-500"
      >
        <Icon className="h-6 w-6 flex-none fill-zinc-500 transition group-hover:fill-teal-500" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  )
}

function MailIcon(props: React.ComponentPropsWithoutRef<'svg'>) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'I’m Nathan Smith. I live in Salida, CO, where I engineer smart software.',
}

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            <span className='mr-4'>👋🏻</span> I’m Nathan Smith.
          </h1>
          <h3 className="mt-4 text-2xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-1xl">
            I live in Salida, CO, where I build creative digital soultions for screens and companies of all sizes.
          </h3>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
              <p>
                I’m a {new Date().getFullYear() - 1981}-year-old Full-Stack
                Engineer & UX designer, currently located just outside of
                Denver, CO. I have been an artist since childhood, and building
                things online since 2001. I cut my teeth managing, and running a
                handful of fairly successful ecommerce websites.
              </p>
              <p>
                I have been an artist since childhood, and building things
                online since 2001. I cut my teeth managing, and running a
                handful of fairly successful ecommerce websites.
              </p>
              <p>
                I had found my passion for building businesses online, and
                gathered the skills to rank them. I saw an opportunity to build
                clean, manageable, SEO friendly websites. My second endeavor was
                born, The Web Alchemist.
              </p>
              <p>
                Since then I have worked with quite a few StartUps, and
                corporate clients. I was the lead designer / front-end developer
                with Net-Results when it was 4 employees. I also ran the agency
                portion, which later became Blue Riot Labs. I was the acting
                Lead WordPress Dev for Hearst Digital News for 3 years before
                they created an in-house agency, which later they offered me a
                lead role.
              </p>
              <p>
                Today, I’m the founder of Alchemy Intelligence, where we’re
                working on AI tools for the SMB market.
              </p>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink href="https://twitter.com/alkymst" icon={TwitterIcon}>
              Follow on Twitter
            </SocialLink>
            <SocialLink href="https://instagram.com/alkymst" icon={InstagramIcon} className="mt-4">
              Follow on Instagram
            </SocialLink>
            <SocialLink href="https://github.com/alkymst" icon={GitHubIcon} className="mt-4">
              Follow on GitHub
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/alkymst" icon={LinkedInIcon} className="mt-4">
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:webalkymst@gmail.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              webalkymst@gmail.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  )
}
