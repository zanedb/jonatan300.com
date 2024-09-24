'use client'

import { zodResolver } from '@hookform/resolvers/zod'
import { useForm } from 'react-hook-form'
import { z } from 'zod'
import validator from 'validator'
import { Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useState } from 'react'

const formSchema = z.object({
  name: z.string().min(2, 'can’t be empty').max(50),
  phone: z.string().refine(validator.isMobilePhone, 'invalid phone'),
  email: z.string().email('invalid email').min(5),
  message: z.string().min(10, 'not long enough').max(3000),
})

export default function Contact() {
  const [status, setStatus] = useState<'idle' | 'shown' | 'sending' | 'sent'>(
    'idle'
  )

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: '',
      phone: '',
      email: '',
      message: '',
    },
  })

  function onSubmit(values: z.infer<typeof formSchema>) {
    setStatus('sending')
    fetch('/api/airtable', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then((res) => {
      if (res.status == 200) {
        setStatus('sent')
      }
    })
  }

  return (
    <>
      {status === 'shown' || status === 'sending' ? (
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>name</FormLabel>
                  <FormControl>
                    <Input
                      autoFocus
                      placeholder="goer"
                      disabled={status === 'sending'}
                      className="text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>email</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="goer@gmail.com"
                      disabled={status === 'sending'}
                      className="text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="phone"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>phone</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="xxx-xxx-xxxx"
                      disabled={status === 'sending'}
                      className="text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>message</FormLabel>
                  <FormControl>
                    <Textarea
                      placeholder="…"
                      disabled={status === 'sending'}
                      className="text-base"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button type="submit" disabled={status === 'sending'}>
              {status === 'sending' && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              {status === 'sending' ? 'sending' : 'send it'}
            </Button>
          </form>
        </Form>
      ) : (
        <Button
          variant="outline"
          onClick={() => setStatus('shown')}
          disabled={status === 'sent'}
          className="opacity-100"
        >
          {status === 'sent' ? 'sent' : 'commission me'}
        </Button>
      )}
    </>
  )
}
