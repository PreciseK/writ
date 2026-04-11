import { Users, CalendarCheck, Award, CheckCircle, GitBranch, ShieldCheck } from 'lucide-react';
import { Card } from '@/components/ui/card';

/* ── Illustration: Dedicated Delivery Teams ─────────────────────────── */
const TeamsIllustration = () => (
  <Card aria-hidden className="mt-8 p-5">
    <div className="mb-1 text-sm font-semibold text-foreground">Active Delivery Team</div>
    <div className="mb-4 text-xs text-muted-foreground">Q1 2025 — Ongoing</div>

    <div className="space-y-2">
      {[
        { role: 'Tech Lead',        status: 'Active', color: 'bg-lime-400' },
        { role: 'Backend Engineer', status: 'Active', color: 'bg-lime-400' },
        { role: 'Frontend Engineer',status: 'Active', color: 'bg-lime-400' },
        { role: 'QA Engineer',      status: 'Review', color: 'bg-yellow-400' },
      ].map((member) => (
        <div key={member.role} className="flex items-center justify-between rounded-md bg-muted/50 px-3 py-2">
          <div className="flex items-center gap-2">
            <span className={`size-2 rounded-full ${member.color}`} />
            <span className="text-xs font-medium text-foreground">{member.role}</span>
          </div>
          <span className="text-xs text-muted-foreground">{member.status}</span>
        </div>
      ))}
    </div>

    <div className="mt-4 flex items-center gap-1.5">
      {[
        'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=40&h=40&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1573497701240-345a300b8d36?w=40&h=40&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1580894732444-8ecded7900cd?w=40&h=40&fit=crop&crop=face',
        'https://images.unsplash.com/photo-1573496130407-57329f01f769?w=40&h=40&fit=crop&crop=face',
      ].map((src, i) => (
        <div key={i} className="size-7 overflow-hidden rounded-full border-2 border-background ring-1 ring-border/60">
          <img src={src} alt="Team member" className="h-full w-full object-cover" />
        </div>
      ))}
      <span className="ml-1 text-xs text-muted-foreground">4 engineers assigned</span>
    </div>
  </Card>
);

/* ── Illustration: Project-Based Support ────────────────────────────── */
const ProjectIllustration = () => (
  <div aria-hidden className="relative mt-6">
    <Card className="w-4/5 translate-y-2 p-4 transition-transform duration-200 ease-in-out group-hover:-rotate-2">
      <div className="mb-3 flex items-center gap-2">
        <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
          <CheckCircle className="size-3.5 text-primary" />
        </div>
        <span className="text-sm font-medium text-foreground">Milestone 2 — Complete</span>
      </div>
      <div className="space-y-2 ml-8">
        <div className="h-2 rounded-full bg-foreground/10" />
        <div className="h-2 w-3/5 rounded-full bg-foreground/10" />
        <div className="h-2 w-2/5 rounded-full bg-foreground/10" />
      </div>
      <div className="mt-3 ml-8 flex items-center gap-1.5">
        <span className="rounded-full bg-lime-500/15 px-2 py-0.5 text-[10px] font-medium text-lime-800">On Track</span>
        <span className="text-xs text-muted-foreground">Delivered 3 days early</span>
      </div>
    </Card>

    <Card className="absolute -top-3 right-0 w-2/5 translate-y-2 p-3 transition-transform duration-200 ease-in-out group-hover:rotate-2">
      <div className="flex flex-col items-center gap-2 py-1">
        <GitBranch className="size-5 text-primary/60" />
        <span className="text-center text-[10px] font-medium text-muted-foreground">Fixed Scope Delivery</span>
      </div>
    </Card>
  </div>
);

/* ── Illustration: Technical Leadership ─────────────────────────────── */
const LeadershipIllustration = () => (
  <Card aria-hidden className="mt-6 translate-y-2 p-4 pb-5 transition-transform duration-200 group-hover:translate-y-0">
    <div className="flex items-center gap-2 mb-3">
      <ShieldCheck className="size-3.5 text-primary" />
      <p className="text-sm font-medium text-foreground">Architecture Review</p>
    </div>
    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
      How should we structure the microservices layer to ensure scalability and compliance?
    </p>
    <div className="rounded-lg bg-foreground/5 p-3 space-y-3">
      <div className="text-xs text-muted-foreground font-medium">Technical oversight active</div>
      <div className="space-y-1.5">
        {['Code quality standards set', 'CI/CD pipeline reviewed', 'Security audit scheduled'].map((item) => (
          <div key={item} className="flex items-center gap-2">
            <CheckCircle className="size-3 text-lime-600 shrink-0" />
            <span className="text-xs text-foreground/80">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </Card>
);

/* ── Section ─────────────────────────────────────────────────────────── */
export default function WhatWeDoSection() {
  return (
    <section className="py-24 bg-white">
      <div className="container-max">
        <div>
          <h2 className="text-foreground max-w-2xl text-balance text-4xl font-semibold tracking-tight">
            Structural IT capacity without the overhead
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground text-lg leading-relaxed">
            By engaging Wager Technik as a delivery-focused subcontractor, you gain an entire team
            dedicated to your technical goals — without hiring risk.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {/* Card 1 */}
          <Card variant="soft" className="overflow-hidden p-6">
            <Users className="text-primary size-5" />
            <h3 className="text-foreground mt-5 text-lg font-semibold">Dedicated Delivery Teams</h3>
            <p className="text-muted-foreground mt-3 text-balance text-sm">
              Fully formed engineering units integrated into your workflow. We take full ownership of the delivery process.
            </p>
            <TeamsIllustration />
          </Card>

          {/* Card 2 */}
          <Card variant="soft" className="group overflow-hidden px-6 pt-6">
            <CalendarCheck className="text-primary size-5" />
            <h3 className="text-foreground mt-5 text-lg font-semibold">Project-Based Support</h3>
            <p className="text-muted-foreground mt-3 text-balance text-sm">
              End-to-end execution for specific milestones and fixed scopes — delivered on time, every time.
            </p>
            <ProjectIllustration />
          </Card>

          {/* Card 3 */}
          <Card variant="soft" className="group overflow-hidden px-6 pt-6">
            <Award className="text-primary size-5" />
            <h3 className="text-foreground mt-5 text-lg font-semibold">Technical Leadership</h3>
            <p className="text-muted-foreground mt-3 text-balance text-sm">
              Oversight on architecture, code quality, and best practices — so your technology stays solid long-term.
            </p>
            <div className="-mx-2 -mt-2 px-2 pt-2">
              <LeadershipIllustration />
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
