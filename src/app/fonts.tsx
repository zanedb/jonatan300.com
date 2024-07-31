import localFont from 'next/font/local'

export const newSpirit = localFont({
  src: [
    {
      path: '../../public/fonts/NewSpirit-Light.woff2',
      weight: '300',
      style: 'normal',
    },
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
    {
      path: '../../public/fonts/NewSpirit-SemiBold.woff2',
      weight: '600',
      style: 'normal',
    },
    {
      path: '../../public/fonts/NewSpirit-Bold.woff2',
      weight: '700',
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
    {
      path: '../../public/fonts/ESRebondGrotesque-Italic.woff2',
      weight: '400',
      style: 'italic',
    },
    {
      path: '../../public/fonts/ESRebondGrotesque-Bold.woff2',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-rebond-grotesque',
})
