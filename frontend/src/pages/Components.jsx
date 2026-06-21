import { useState } from "react";

import {
  Button,
  Input,
  Modal,
  Toast,
  Loader,
} from "../components/ui";

function Components() {
  const [showModal, setShowModal] = useState(false);
  const [showToast, setShowToast] = useState(false);

  return (
    <div className="p-8 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">
        UI Components Showcase
      </h1>

      <div className="space-y-6">

        <div>
          <h2 className="font-semibold mb-2">
            Button Component
          </h2>

          <Button
            text="Open Modal"
            onClick={() => setShowModal(true)}
          />
        </div>

        <div>
          <h2 className="font-semibold mb-2">
            Input Component
          </h2>

          <Input placeholder="Enter product name" />
        </div>

        <div>
          <h2 className="font-semibold mb-2">
            Toast Component
          </h2>

          <button
            onClick={() => setShowToast(true)}
            className="bg-green-600 text-white px-4 py-2 rounded"
          >
            Show Toast
          </button>
        </div>

        {showToast && (
          <Toast message="Description generated successfully!" />
        )}

        <div>
          <h2 className="font-semibold mb-2">
            Loader Component
          </h2>

          <Loader />
        </div>

      </div>

      <Modal
        isOpen={showModal}
        title="Demo Modal"
      />
    </div>
  );
}

export default Components;