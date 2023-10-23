import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import OrderPurchase from "/assets/images/photo-order-confirmed.jpg";
import { useDispatch } from "react-redux";
import { cleanCart } from "../../redux/actions";

const ModalPurchase = ({ products }) => {
  const dispatch = useDispatch();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Button
        onPress={() => {
          products && onOpen();
          dispatch(cleanCart());
        }}
        className={`${
          products
            ? "font-Jost bg-[#ff4495] text-white cursor-pointer"
            : "font-Jost bg-gray-500 text-white cursor-not-allowed"
        } cursor-pointer`}
      >
        Order
      </Button>
      <Modal isOpen={isOpen} onOpenChange={onOpenChange} isDismissable={false}>
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody>
                <img src={OrderPurchase} alt="" />
              </ModalBody>
              <ModalFooter>
                <Button
                  className="bg-[#ff4495] font-Jost text-white"
                  onPress={onClose}
                >
                  Done
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalPurchase;
