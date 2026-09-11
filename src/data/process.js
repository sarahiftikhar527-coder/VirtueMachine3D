import { FileUp, Layers, Printer, ScanSearch, PackageCheck } from 'lucide-react'

export const PROCESS_STEPS = [
  {
    num: '01',
    icon: FileUp,
    title: 'Upload Your Design',
    desc: 'Send STL, STEP, OBJ or 3MF files through the quote portal. An engineer reviews every file for printability within 4 working hours.',
    duration: '~4 h review',
  },
  {
    num: '02',
    icon: Layers,
    title: 'Choose Material',
    desc: 'Pick from 50+ certified polymers, resins and composites — or let our materials lab recommend the optimal match for your load, heat and budget.',
    duration: '50+ options',
  },
  {
    num: '03',
    icon: Printer,
    title: 'Precision Printing',
    desc: 'Your part runs on a calibrated machine with in-process monitoring. Layer resolution down to 25 microns, controlled to ±0.1mm.',
    duration: '24–72 h',
  },
  {
    num: '04',
    icon: ScanSearch,
    title: 'Quality Inspection',
    desc: 'Dimensional verification with calipers and CMM, surface finishing and a first-article report on request before anything ships.',
    duration: '100% checked',
  },
  {
    num: '05',
    icon: PackageCheck,
    title: 'Delivery',
    desc: 'Tracked, protected packaging with material certificates. Average door-to-door time from upload: 48 hours.',
    duration: '48 h avg',
  },
]
