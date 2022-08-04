import { Button, Stack } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import storeItems from "../data/items.json";
import { formatCurrencry } from "../utilities/formatCurrency";

type CartItemProps = {
  id: number;
  quantity: number;
};

export function CartItem({ id, quantity }: CartItemProps) {
  const { decreaseCartQuantity, increaseCartQuantity, removeFromCart } =
    useShoppingCart();
  const item = storeItems.find((i) => i.id === id);
  if (item == null) return null;

  return (
    <Stack direction="horizontal" gap={2} className="d-flex align-items-center">
      <img
        src={item.imgUrl}
        style={{ width: "125px", height: "75px", objectFit: "cover" }}
      />
      <div className="me-auto">
        <div>{item.name}</div>
        <div>
          {quantity > 1 && (
            <span className="text-muted" style={{ fontSize: ".65rem" }}>
              x{quantity}
            </span>
          )}
        </div>
        <div className="text-muted" style={{ fontSize: ".75rem" }}>
          {formatCurrencry(item.price)}
        </div>
      </div>
      <div>{formatCurrencry(item.price * quantity)}</div>
      <Stack direction="vertical" style={{ maxWidth: "2rem" }}>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => increaseCartQuantity(id)}
        >
          +
        </Button>
        <Button
          variant="outline-primary"
          size="sm"
          onClick={() => decreaseCartQuantity(id)}
        >
          -
        </Button>
      </Stack>
      <Button
        variant="outline-danger"
        size="sm"
        onClick={() => removeFromCart(item.id)}
      >
        &times;
      </Button>
    </Stack>
  );
}
