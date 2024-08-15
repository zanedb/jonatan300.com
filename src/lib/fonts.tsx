import localFont from 'next/font/local'

export const newSpirit = localFont({
  src: [
    {
      path: '../../public/fonts/NewSpirit-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NewSpirit-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
  ],
  variable: '--font-newspirit',
})

export const rebondGrotesque = localFont({
  src: [
    {
      path: '../../public/fonts/ESRebondGrotesque-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
  ],
  variable: '--font-rebond-grotesque',
})
