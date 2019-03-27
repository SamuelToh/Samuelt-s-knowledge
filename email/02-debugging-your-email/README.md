# Increasing mail delivery rate

## Introduction

In this blog post we talk about debugging your sent email.

## Use case

I sent out an email.
My receipent did not receive it.
But I do.

What's next?

## Solution

Depending on what email client you are using, most email applications actually allow you to view the source of your email.

If you know how, you should take a look at the email you send to give you a better idea.

The first thing you want to lookout for is the `HEADER` of your email. It definitely tells you a lot about your email,
you may want to particularly pay extra attention to the `X-SPAM-Status` attribute, if it is available.

You may notice a `score` for the email. Ideally you would want to make this score as low as possible. A `score` of
0.0 means 'not a spam'. Anything more than zero is usually fine, however the higher score it is the more chance your email
will be mark bounce. When the score is too high, email of such will be mark as rejected and if the score is
extremely high, there is a chance it will be dropped silently.

