'use client';

import Image from 'next/image';
import { TEAM_MEMBERS } from '@/constants';

export default function TeamGrid() {
    return (
        <section className="relative py-20 bg-primary-secondary/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <h2 className="font-lora text-4xl md:text-5xl font-bold text-primary-text text-center mb-16">
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl mx-auto">
                    {TEAM_MEMBERS.map((member, index) => (
                        <div
                            key={index}
                            className="bg-white/80 backdrop-blur-sm rounded-custom p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-accent/20"
                        >
                            <div className="text-center">
                                {member.image ? (
                                    <div className="relative w-32 h-32 mx-auto mb-6">
                                        <Image
                                            src={member.image}
                                            alt={member.name}
                                            fill
                                            className="rounded-full object-cover shadow-lg"
                                            sizes="(max-width: 768px) 128px, 128px"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary-secondary flex items-center justify-center">
                                        <member.icon className="w-16 h-16 text-primary-accent" />
                                    </div>
                                )}

                                <h3 className="font-lora text-2xl font-bold text-primary-text mb-2">
                                    {member.name}
                                </h3>
                                <p className="text-primary-accent font-medium mb-2">
                                    {member.position}
                                </p>
                                {member.experience && (
                                    <p className="text-primary-text/70 text-sm">
                                        {member.experience}
                                    </p>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
