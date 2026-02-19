import { cn } from "@/lib/utils";

const Icon = ({ children, className, ...props }: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className={cn("h-full w-full", className)}
    {...props}
  >
    {children}
  </svg>
);

export const IconReact = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z" />
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(60 12 12)" />
    <ellipse cx="12" cy="12" rx="4" ry="10" transform="rotate(120 12 12)" />
    <circle cx="12" cy="12" r="2" />
  </Icon>
);

export const IconNodejs = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M12 2l-8 4.5v9l8 4.5 8-4.5v-9L12 2zm-.22 15.65l-5.4-3.12v-3.41l5.4 3.12v3.41zm.44-4.15L6.82 9.38l1.39-.79 5.4 3.12-1.39.79zm5.18-2.93l-5.4-3.12v-3.4l5.4 3.12v3.4z" />
  </Icon>
);

export const IconTypescript = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M2,2H22V22H2V2M20,12.4V8.2H14.8V6.4H20V4H13V20h1.8v-5.8h3.4v-1.8h-3.4V14.2h3.9L20,12.4M11.2,14.2v-1.8H6.4v-1h4.8V9.6H6.4V8.6h4.8V6.8H4.6V20h1.8V15.9h3.2v-1.7H6.4v-1h4.8Z" />
  </Icon>
);

export const IconJavascript = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M2,2H22V22H2V2M11.1,16.2v-1.8H7.3v-1h3.8V11.6H7.3V10.6h3.8V8.8H5.5V18h1.8v-1.8h3.8M18.5,18h1.8V8.8H13.2v1.8h3.5v1h-3.5v1.8h3.5v1h-3.5v1.8h5.3Z" />
  </Icon>
);

export const IconHtml5 = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M2,4V20h20V4H2M14.1,15.6l-3.1.8-3.1-.8L7.6,13h1.8l.2,1.3,1.4.4,1.4-.4.2-1.8H7.3l-.4-4.1h7.8l-.2,1.8H9.3l.1.5h4.6l-.3,3.3M19.1,8.6H13.2l.2-1.8h6.1l-.2,1.8Z" />
  </Icon>
);

export const IconCss3 = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M2,4V20h20V4H2M14.1,15.6l-3.1.8-3.1-.8L7.6,13h1.8l.2,1.3,1.4.4,1.4-.4.2-1.8H7.3l-.4-4.1h7.8l-.2,1.8H9.3l.1.5h4.6l-.3,3.3M19.1,8.6H13.2l.2-1.8h6.1l-.2,1.8Z" />
  </Icon>
);

export const IconNextjs = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm3.89 13.33H14.1v-4.66l-2.67 4.66h-1.78v-7.33h1.8v4.66l2.67-4.66h1.77v7.33z" />
  </Icon>
);

export const IconTailwindcss = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M12,2C6.48,2,2,6.48,2,12s4.48,10,10,10s10-4.48,10-10S17.52,2,12,2z M15.3,10.2c-1.8,0-3.3,1.5-3.3,3.3 c0,1.8,1.5,3.3,3.3,3.3c1.8,0,3.3-1.5,3.3-3.3C18.6,11.7,17.1,10.2,15.3,10.2z M8.7,6.9c-1.8,0-3.3,1.5-3.3,3.3 c0,1.8,1.5,3.3,3.3,3.3c1.8,0,3.3-1.5,3.3-3.3C12,8.4,10.5,6.9,8.7,6.9z" />
  </Icon>
);

export const IconPostgresql = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.5 14.5v-9h3v1.5h-1.5v3h1.5v1.5h-1.5v3h-1.5zm-3-4.5h1.5v1.5h-1.5v-1.5zm6 0h1.5v1.5h-1.5v-1.5z" />
  </Icon>
);

export const IconMongodb = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-.6 15.6c-3.3 0-6-2.4-6-5.4s2.7-5.4 6-5.4c1.1 0 2.1.3 3 .8v1.7c-.8-.5-1.8-.8-2.9-.8-2.2 0-4 1.7-4 3.7s1.8 3.7 4 3.7c1.1 0 2.1-.3 2.9-.8v1.7c-.9.5-1.9.8-3 .8z" />
  </Icon>
);

export const IconFirebase = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M3.75 18.25l7.5-16.5 7.5 16.5-9.375-3.75L3.75 18.25zm8.06-8.06L9.375 2.5 4.5 14.5l5.31-2.12zm1.88 0l2.44-7.69L19.5 14.5l-5.31-2.12z" />
  </Icon>
);

export const IconDocker = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M21.5 8.24V6.5a1 1 0 0 0-1-1H3.5a1 1 0 0 0-1 1v1.74A4.39 4.39 0 0 1 7.25 5h9.5a4.39 4.39 0 0 1 4.75 3.24zM10 12v-2h4v2h-4zm-3 0v-2h2v2H7zm9 0v-2h2v2h-2zm-6 3v2h4v-2h-4zM22 13.5c0-2.42-1.98-4.5-4.5-4.5H6.5C3.98 9 2 11.08 2 13.5v.21c.21.03.42.08.64.12 1.34.28 2.65 1.57 3.36 2.17 1.43 1.2 3.5 1.2 4.93 0s2.77-1.4 4.14-2.17c.71-.6 2.02-1.89 3.36-2.17.22-.04.43-.09.64-.12v-.21z" />
  </Icon>
);

export const IconGit = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M21.6 8.4l-6-6c-.4-.4-.9-.6-1.4-.6H4c-1.1 0-2 .9-2 2v16c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V9.8c0-.5-.2-1-.6-1.4zM15 4l5 5h-5V4zm-3.1 14.1l-3.8-3.8c-.2-.2-.2-.5 0-.7l3.8-3.8c.3-.3.8-.1.8.3v2.6h2.1c.3 0 .5.2.5.5v1.5c0 .3-.2.5-.5.5h-2.1v2.6c0 .4-.5.6-.8.3z" />
  </Icon>
);

export const IconAws = (props: React.SVGProps<SVGSVGElement>) => (
  <Icon {...props}>
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1.07 15.65c-.56-1.11-1.22-2.3-2.04-3.52-.39-.58-.8-1.18-1.23-1.82.52-1.11 1.02-2.2 1.5-3.26.47-1.04.9-2.07 1.3-3.08.4.98.83 2.01 1.28 3.05.47 1.05.97 2.13 1.48 3.23-.42.64-.84 1.25-1.25 1.87-.83 1.24-1.51 2.45-2.07 3.53z"/>
  </Icon>
);


export const TechIcon = ({ name, ...props }: { name: string } & React.SVGProps<SVGSVGElement>) => (
  <div className="flex items-center justify-center w-full h-full text-xs font-bold bg-muted text-muted-foreground rounded-sm" {...props}>
    {name}
  </div>
);
