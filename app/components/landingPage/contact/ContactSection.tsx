import { FaEnvelope } from "react-icons/fa"
import { FaLocationDot } from "react-icons/fa6"
import { IoCall } from "react-icons/io5"

const ContactSection = () => {
	return (
		<section>
			<div className="grid grid-cols-1 sm:grid-cols-3 text-base-100">
				<div className="flex flex-col items-center justify-center text-center py-7 sm:py-16 bg-secondary gap-y-4">
					<div>
						<FaEnvelope className="w-8 h-8" />
					</div>
					<h3>Office Address</h3>
					<div>
						<p>Auf Weihsert, 98</p>
						<p>56637 Plaidt, Germany</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center text-center py-7 sm:py-16 text-white bg-primary gap-y-4">
					<div>
						<FaLocationDot className="w-8 h-8" />
					</div>
					<h3>Email us</h3>
					<div>
						<p>staff@wk-planner.com</p>
						<p>support@wk-planner.com</p>
					</div>
				</div>
				<div className="flex flex-col items-center justify-center text-center py-7 sm:py-16 bg-secondary gap-y-4">
					<div>
						<IoCall className="w-8 h-8" />
					</div>
					<h3>Call us</h3>
					<div>
						<p>+33 6 21 56 80 00</p>
						<p>+33 6 02 16 06 96</p>
					</div>
				</div>
			</div>
		</section>
	)
}
export default ContactSection
