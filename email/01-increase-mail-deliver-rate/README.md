# Increasing mail delivery rate

## Introduction

Sending out email is not as what it used to be. There are plenty of APIs or library to assist developers from 
sending email. However, whether you email land on the receipent's mailbox is another challenge.

In this blog post we discuss about email's delivery rate, main focus would be how to increase it.

## Use case

I want to send out emails.

I want my audience to be able to receive them.

## Solution

There are many email providers out in the internet world. Some of the reputable ones are Microsoft and Google's gmail, not
forgetting some of the chinese providers like qq.

They each have their own unique set of rules for identifying spammers.

To increase your mail delivery rate, the first thing you need to figure out is your senders score.

Every ip address used for delivery mail would be rated by the receipent's email provider.

You can check your score in some of the free sites like `https://www.senderscore.org/`. So make sure you have a decent score. 

If you are not into managing your reputation you can consider outsourcing this bit to a mail sender provider like AWS's `SES` (Simple email service).

`https://aws.amazon.com/ses/`

