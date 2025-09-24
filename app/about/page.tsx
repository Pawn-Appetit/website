import Header from '../../components/Header'
import Footer from '../../components/Footer'
import { Users, Heart, Target, Award, Coffee, Github } from 'lucide-react'

export default function About() {
    const teamMembers = [
        {
            name: 'Rustam Abrahamyan',
            role: 'Core Maintainer',
            bio: 'Software Engineer and chess enthusiast. Passionate about building open source software that empowers chess players around the world.',
            avatar: '👨‍💻',
            links: {
                github: 'https://github.com/Rustam-Abrahamyan'
            }
        },
        {
            name: 'Francisco Salgueiro',
            role: 'Creator of En Croissant',
            bio: 'Software Engineer and chess lover. Creator of the original En Croissant project, which laid the foundation for Pawn Appétit.',
            avatar: '👨‍💻',
            links: {
                github: 'https://github.com/franciscoBSalgueiro'
            }
        },
    ]

    const contributors = [
        { name: 'garbidge', contributions: 'Engine integrations' },
        { name: 'dotneB', contributions: 'UI improvements' },
        { name: 'gm-m', contributions: 'Analysis features' },
        { name: 'chuigda', contributions: 'Performance optimizations' },
        { name: 'yuval59', contributions: 'Bug fixes' },
        { name: 'Cankyre', contributions: 'Translations' },
        { name: 'tblrone', contributions: 'Database features' },
        { name: 'Scoutboy06', contributions: 'UI/UX design' }
    ]

    const values = [
        {
            icon: <Heart className="h-8 w-8" />,
            title: 'Open Source',
            description: 'We believe in the power of open source software and community-driven development.'
        },
        {
            icon: <Users className="h-8 w-8" />,
            title: 'Community First',
            description: 'Our users and contributors are at the heart of everything we do.'
        },
        {
            icon: <Target className="h-8 w-8" />,
            title: 'Quality Focus',
            description: 'We strive for excellence in every feature and user interaction.'
        },
        {
            icon: <Award className="h-8 w-8" />,
            title: 'Chess Excellence',
            description: 'Built by chess players, for chess players, with deep understanding of the game.'
        }
    ]

    const milestones = [
        {
            year: '2021',
            title: 'En Croissant Born',
            description: 'Francisco Salgueiro creates the original En Croissant chess application.'
        },
        {
            year: '2023',
            title: 'Community Growth',
            description: 'Project gains traction with active contributors and users worldwide.'
        },
        {
            year: '2024',
            title: 'Pawn Appétit Fork',
            description: 'Project evolves into Pawn Appétit with enhanced features and broader vision.'
        },
        {
            year: '2025',
            title: 'Continued Innovation',
            description: 'Ongoing development with mobile apps, web version, and advanced features planned.'
        }
    ]

    return (
        <div className="min-h-screen bg-white dark:bg-gray-900">
            <Header />

            {/* Hero Section */}
            <section className="pt-24 pb-16 bg-gradient-to-br from-primary-50 to-primary-100 dark:from-gray-800 dark:to-gray-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-6xl">
                            About
                            <span className="bg-gradient-to-r from-primary-600 to-primary-800 bg-clip-text text-transparent">
                                {" "}Pawn Appétit
                            </span>
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300 sm:text-xl">
                            Born from a passion for chess and open source software, Pawn Appétit is
                            dedicated to creating the ultimate chess analysis and training platform.
                        </p>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl">
                        <div className="text-center mb-16">
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                                Our Mission
                            </h2>
                        </div>

                        <div className="card p-8 text-center">
                            <div className="text-4xl mb-6">♟️</div>
                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                                Empowering Chess Players Worldwide
                            </h3>
                            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
                                Our mission is to create the most powerful, intuitive, and accessible chess analysis
                                platform that helps players of all levels improve their game. We believe that great
                                chess software should be free, open source, and built by the community for the community.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Values */}
            <section className="py-24 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Our Values
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            The principles that guide our development and community.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
                        {values.map((value) => (
                            <div key={value.title} className="card card-hover p-6 text-center">
                                <div className="flex items-center justify-center w-16 h-16 bg-primary-600 rounded-xl text-white mx-auto mb-4">
                                    {value.icon}
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    {value.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    {value.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Team */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Core Team
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Meet the passionate developers behind Pawn Appétit.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
                        {teamMembers.map((member) => (
                            <div key={member.name} className="card card-hover p-8">
                                <div className="flex items-start gap-6">
                                    <div className="text-6xl">{member.avatar}</div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                                            {member.name}
                                        </h3>
                                        <p className="text-primary-600 dark:text-primary-400 font-medium mb-3">
                                            {member.role}
                                        </p>
                                        <p className="text-gray-600 dark:text-gray-300 mb-4">
                                            {member.bio}
                                        </p>
                                        <div className="flex space-x-3">
                                            {member.links.github && (
                                                <a
                                                    href={member.links.github}
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300"
                                                    aria-label={`View ${member.name}'s GitHub profile`}
                                                >
                                                    <Github className="h-5 w-5" />
                                                </a>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Contributors */}
            <section className="py-24 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Contributors
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Amazing people who have contributed to making Pawn Appétit better.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                        {contributors.map((contributor) => (
                            <div key={contributor.name} className="card p-4">
                                <h3 className="font-semibold text-gray-900 dark:text-white">
                                    {contributor.name}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400">
                                    {contributor.contributions}
                                </p>
                            </div>
                        ))}
                    </div>

                    <div className="text-center mt-12">
                        <p className="text-gray-600 dark:text-gray-400 mb-4">
                            And many more amazing contributors...
                        </p>
                        <a
                            href="https://github.com/Pawn-Appetit/pawn-appetit/graphs/contributors"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-primary"
                        >
                            View All Contributors
                        </a>
                    </div>
                </div>
            </section>

            {/* Timeline */}
            <section className="py-24 bg-white dark:bg-gray-900">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl">
                            Our Journey
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-gray-300">
                            Key milestones in the development of Pawn Appétit.
                        </p>
                    </div>

                    <div className="relative">
                        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
                        <div className="space-y-12">
                            {milestones.map((milestone) => (
                                <div key={milestone.year} className="relative flex items-start gap-6">
                                    <div className="flex items-center justify-center w-16 h-16 bg-primary-600 text-white rounded-full font-bold text-lg">
                                        {milestone.year}
                                    </div>
                                    <div className="flex-1">
                                        <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                                            {milestone.title}
                                        </h3>
                                        <p className="text-gray-600 dark:text-gray-300">
                                            {milestone.description}
                                        </p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Acknowledgments */}
            <section className="py-24 bg-gray-50 dark:bg-gray-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-4xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white sm:text-4xl mb-8">
                            Acknowledgments
                        </h2>

                        <div className="space-y-8">
                            <div className="card p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Built on En Croissant
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Pawn Appétit is a fork of the excellent{" "}
                                    <a
                                        href="https://github.com/franciscoBSalgueiro/en-croissant"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300"
                                    >
                                        En Croissant
                                    </a>{" "}
                                    project by Francisco Salgueiro. We&apos;re grateful for the solid foundation
                                    and innovative ideas that made Pawn Appétit possible.
                                </p>
                            </div>

                            <div className="card p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Open Source Technologies
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    We&apos;re built on the shoulders of giants, using amazing open source technologies
                                    like Tauri, React, TypeScript, and many others. Thank you to all the
                                    maintainers and contributors of these projects.
                                </p>
                            </div>

                            <div className="card p-6">
                                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                                    Chess Community
                                </h3>
                                <p className="text-gray-600 dark:text-gray-300">
                                    Special thanks to the global chess community for their feedback,
                                    suggestions, and continued support. Your passion for the game
                                    drives us to create better tools for chess analysis and learning.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-16 bg-primary-600 dark:bg-primary-800">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <Coffee className="h-12 w-12 text-white mx-auto mb-4" />
                        <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                            Want to join our story?
                        </h2>
                        <p className="mt-6 text-lg leading-8 text-primary-100">
                            Whether you&apos;re a developer, designer, translator, or chess enthusiast,
                            there&apos;s a place for you in our community.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <a
                                href="/contribute"
                                className="bg-white text-primary-600 hover:bg-gray-50 font-medium py-3 px-8 rounded-lg transition-colors duration-200"
                            >
                                Get Involved
                            </a>
                            <a
                                href="https://discord.gg/8hk49G8ZbX"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white hover:text-primary-100 font-medium"
                            >
                                Join Discord <span aria-hidden="true">→</span>
                            </a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    )
}
