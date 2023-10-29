import React from "react";
import { useLogs } from "@ysq-intl/sdk-misc";

class ErrorBoundary extends React.Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false };
	}

	static getDerivedStateFromError(error) {
		// Update state so the next render will show the fallback UI.
		return { hasError: true };
	}

	componentDidCatch(error, errorInfo) {
		// You can also log the error to an error reporting service
		//   logErrorToMyService(error, errorInfo);
		this.props.createLog?.action({
			pathname: window.location.pathname,
			msg: `${error.message} ${JSON.stringify(errorInfo)}`,
		});
	}

	render() {
		if (this.state.hasError) {
			// You can render any custom fallback UI
			return (
				<section
					className="loading-screen"
					style={{
						background: `#1F2122`,
						color: "#fff",
						height: "100vh",
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
					}}
				>
					Oops! Something went wrong.
				</section>
			);
		}

		return this.props.children;
	}
}

const Index = (props) => {
	const { createLog } = useLogs();
	return <ErrorBoundary createLog={createLog} children={props.children} />;
};

export default Index;
