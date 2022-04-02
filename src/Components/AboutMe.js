import {GithubOutlined, GoogleCircleFilled, LinkedinOutlined} from "@ant-design/icons"

export default function AboutMe(){
    return(
        <div>
            <h2>About Me</h2>
            <p>
                I have an outgoing personality and am a motivated individual who is always willing to learn and grow. My objective is to work as a Software engineer in a setting that will harness my new talents and support my growth in my new found career. Being a previous healthcare provider, I have a passion for solving problems and helping people. I have no doubt these passions will continue to be fulfilled in the world of STEM.
                </p>
            <h2>Let's Connect</h2>
            <>
            <a href="https://www.linkedin.com/in/ashley-dennis-dev/">
            <LinkedinOutlined />
            </a>
            <a href="https://github.com/AshleyDennisDev">
            <GithubOutlined />
            </a>
            <a href="mailto:adenn1852@gmail.com">
            <GoogleCircleFilled />
            </a>
            </>
        </div>
    )
}