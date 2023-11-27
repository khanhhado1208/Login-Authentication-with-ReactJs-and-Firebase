import React from "react";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


const WifiAccordion = () => {
  return (
    <div className="accordion" id="wifiAccordion">
      <div className="accordion-item">
        <h2 className="accordion-header" id="flexibilityHeading">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flexibilityCollapse" aria-expanded="false" aria-controls="flexibilityCollapse">
            Flexibility and Remote Accessibility
          </button>
        </h2>
        <div id="flexibilityCollapse" className="accordion-collapse collapse" aria-labelledby="flexibilityHeading" data-bs-parent="#wifiAccordion">
          <div className="accordion-body">
            Wi-Fi enables wireless communication, allowing Hoist 2, IoT gateways, and the web UI to communicate without physical connections. It offers flexibility in device placement and allows remote monitoring, configuration, and control.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="accessibilityHeading">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#accessibilityCollapse" aria-expanded="false" aria-controls="accessibilityCollapse">
            Enhanced Accessibility
          </button>
        </h2>
        <div id="accessibilityCollapse" className="accordion-collapse collapse" aria-labelledby="accessibilityHeading" data-bs-parent="#wifiAccordion">
          <div className="accordion-body">
            Wi-Fi offers wider accessibility. With proper network coverage, devices can connect from various locations within the network range, facilitating remote management and monitoring from different points.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="scalabilityHeading">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#scalabilityCollapse" aria-expanded="false" aria-controls="scalabilityCollapse">
            Scalability
          </button>
        </h2>
        <div id="scalabilityCollapse" className="accordion-collapse collapse" aria-labelledby="scalabilityHeading" data-bs-parent="#wifiAccordion">
          <div className="accordion-body">
            Wi-Fi can accommodate multiple devices simultaneously within its network, making it suitable for scenarios involving multiple hoists or additional devices in the future. This scalability aids in expanding the system without significant infrastructure changes.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="easeOfUseHeading">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#easeOfUseCollapse" aria-expanded="false" aria-controls="easeOfUseCollapse">
            Ease of Use
          </button>
        </h2>
        <div id="easeOfUseCollapse" className="accordion-collapse collapse" aria-labelledby="easeOfUseHeading" data-bs-parent="#wifiAccordion">
          <div className="accordion-body">
            Wi-Fi-based communication, especially using WebSocket, simplifies interaction with the web UI. Operators and users can access and control Hoist 2 remotely via a familiar web interface, enhancing user experience and ease of operation.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="realTimeUpdatesHeading">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#realTimeUpdatesCollapse" aria-expanded="false" aria-controls="realTimeUpdatesCollapse">
            Real-Time Updates
          </button>
        </h2>
        <div id="realTimeUpdatesCollapse" className="accordion-collapse collapse" aria-labelledby="realTimeUpdatesHeading" data-bs-parent="#wifiAccordion">
          <div className="accordion-body">
            WebSocket over Wi-Fi allows for efficient bidirectional communication, ensuring real-time updates between Hoist 2, IoT gateways, and the web UI. This real-time transmission of data is crucial for immediate status updates and control actions.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="remoteMaintenanceHeading">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#remoteMaintenanceCollapse" aria-expanded="false" aria-controls="remoteMaintenanceCollapse">
            Remote Maintenance and Diagnostics
          </button>
        </h2>
        <div id="remoteMaintenanceCollapse" className="accordion-collapse collapse" aria-labelledby="remoteMaintenanceHeading" data-bs-parent="#wifiAccordion">
          <div className="accordion-body">
            Wireless connectivity facilitates remote diagnostics and maintenance. Operators or technicians can remotely access hoists, troubleshoot issues, and perform maintenance tasks without physical proximity.
          </div>
        </div>
      </div>

      <div className="accordion-item">
        <h2 className="accordion-header" id="adaptabilityHeading">
          <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#adaptabilityCollapse" aria-expanded="false" aria-controls="adaptabilityCollapse">
            Adaptability to Modern Environments
          </button>
        </h2>
        <div id="adaptabilityCollapse" className="accordion-collapse collapse" aria-labelledby="adaptabilityHeading" data-bs-parent="#wifiAccordion">
          <div className="accordion-body">
            Wi-Fi is prevalent and well-supported in modern environments, making it easier to integrate into existing infrastructure and environments with wireless connectivity.
          </div>
        </div>
      </div>

    </div>
  );
};

export default WifiAccordion;
