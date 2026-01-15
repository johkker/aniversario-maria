# 🎂 Aniversário da Maria - 17/01/26

A beautiful birthday party management website built with Next.js, featuring a girly-alternative/indie aesthetic with pastel colors and quirky fonts.

## ✨ Features

- 📋 **Attendee Management**: View list of party attendees with payment status
- 🔍 **Filter & Sort**: Filter by payment status (All/Paid/Pending) and sort by name or status
- 💰 **Live Calculations**: Real-time calculation of total collected amount (R$50/person)
- 📍 **Google Maps Integration**: Direct link to party location
- 🎨 **Beautiful UI**: Pastel colors, indie fonts, and smooth animations
- 📱 **Mobile-Friendly**: Fully responsive design for all devices
- ⚡ **Fast & Modern**: Built with Next.js 16 and Tailwind CSS

## 🚀 Getting Started

First, install dependencies:

```bash
npm install
```

Then, run the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## 🏗️ Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Styling**: Tailwind CSS
- **Icons**: Lucide React
- **Fonts**: Indie Flower, Comfortaa, Quicksand
- **Language**: TypeScript

## 📁 Project Structure

```
├── app/
│   ├── api/attendees/     # API endpoint for attendees data
│   ├── page.tsx           # Main landing page
│   ├── layout.tsx         # Root layout
│   └── globals.css        # Global styles
├── components/
│   └── AttendeesList.tsx  # Client component for attendee list
└── public/                # Static assets
```

## 🎨 Customization

### Updating Attendees

Edit the attendees list in `app/api/attendees/route.ts`. In production, this would connect to a real database.

### Styling

- Colors and fonts can be customized in `app/globals.css`
- Component styles use Tailwind CSS classes

## 🚢 Deploy on Vercel

The easiest way to deploy this Next.js app is to use the [Vercel Platform](https://vercel.com/new).

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/johkker/aniversario-maria)

## 📝 License

Made with 💖 for Maria's birthday celebration!
