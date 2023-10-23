import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
} from "@nextui-org/react";
import { AiOutlineShoppingCart, AiOutlineExpandAlt } from "react-icons/ai";
import { useSelector } from "react-redux";
import CardCart from "../ShoppingCart/CardCart/CardCart";
import uuid from "react-uuid";
import { useLocation } from "react-router-dom";

const ModalCart = () => {
  const LOCATION = useLocation();
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  const PRODUCTS = useSelector((state) => state.cartShop);
  const PRICE = useSelector((state) => state.priceTotal);
  return (
    <>
      <div
        className={`fixed h-full flex items-end p-4 w-2 ${
          LOCATION.pathname === "/products" && "2xl:hidden"
        }`}
      >
        <Button
          onPress={onOpen}
          className=" border border-[#ff449546] bg-[#ff4495] text-white font-Jost text-xl h-12"
        >
          <AiOutlineShoppingCart className="text-4xl text-white" />
          {PRODUCTS.length}
        </Button>
      </div>

      <Modal
        backdrop="opaque"
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        classNames={{
          backdrop:
            "bg-gradient-to-t from-zinc-900 to-zinc-900/10 backdrop-opacity-20",
        }}
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalHeader className="flex flex-col gap-1">
                <AiOutlineShoppingCart className="text-5xl text-[#ff4495]" />
              </ModalHeader>
              <ModalBody>
                <div className="overflow-auto flex flex-col gap-7 py-2 h-[230px] border-b border-[#ff449546] bg-white">
                  {PRODUCTS.length > 0 ? (
                    PRODUCTS.map((pr) => (
                      <CardCart
                        key={uuid()}
                        title={pr.title}
                        price={pr.price}
                        image={pr.image}
                        id={pr.id}
                      />
                    ))
                  ) : (
                    <div className="flex w-full h-full justify-center items-center">
                      <p className="font-bold font-Nunito text-gray-400">
                        There are no products in the cart.
                      </p>
                    </div>
                  )}
                </div>
              </ModalBody>
              <ModalFooter>
                <Button className=" font-Jost text-[#ff4495] " onPress={onClose}>
                  Close
                </Button>
                <Button className="bg-[#ff4495] font-Jost text-white" onPress={onClose}>
                 Buy
                </Button>
              </ModalFooter>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
};

export default ModalCart;
