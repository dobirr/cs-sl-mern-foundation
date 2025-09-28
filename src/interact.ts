type VNodeType = string | ((props: any) => VNode);

interface VNode {
  type: VNodeType
  props: Record<string, unknown>
  children: VNode[]
}

/**
 * Creates a VNode (virtual DOM node).
 * @param type - Tag name or component function
 * @param props - Properties of the node
 * @param children - Child nodes or text
 * @returns VNode object
 */
export function h(
  type: string,
  props: Record<string, unknown> | null,
  ...children: (VNode | string)[]
): VNode {
  /*console.log({ type, props: props || {}, children: children.flat() as VNode[] })*/
  return { type, props: props || {}, children: children.flat() as VNode[] }
}


/**
 * Sets properties and event listeners on an HTML element.
 *
 * - Properties starting with "on" and being functions are added as event listeners.
 * - The "style" property is applied as an object to the element.
 * - Other properties are set directly or added as attributes.
 *
 * @param {HTMLElement} el - The target element.
 * @param {Record<string, unknown>} props - The properties to set.
 */
function setProps(el: HTMLElement, props: Record<string, unknown>) {
  for (const [key, value] of Object.entries(props || {})) {
    if (key.startsWith("on") && typeof value === "function") {
      const event = key.slice(2).toLowerCase();
      el.addEventListener(event, value as EventListener);
    } else if (key === "style" && typeof value === "object") {
      Object.assign(el.style, value);
    } else if (key in el) {
      (el as any)[key] = value;
    } else {
      el.setAttribute(key, value as string);
    }
  }
}

/**
 * Creates a real DOM node from a VNode or string.
 *
 * - If the VNode is a component function, it is called and rendered recursively.
 * - If the input is a string, a text node is created.
 * - For element nodes, properties and event listeners are set.
 * - All children are recursively rendered and appended.
 *
 * @param vNode VNode or string to render.
 * @returns The created DOM Node.
 */
function createDom(vNode: VNode | string): Node {
  if (vNode == null) return document.createTextNode("");
  if (typeof vNode === "string") return document.createTextNode(vNode);
  if (typeof vNode.type === "function") return createDom(vNode.type({ ...vNode.props, children: vNode.children }));


  const domElement = document.createElement(vNode.type);

  setProps(domElement, vNode.props);

  const children = vNode.children ?? [];
  children.map(createDom).forEach(note => domElement.appendChild(note));

  return domElement;
}


let root: Element | null = null;
let RootVNode: VNode | null = null;

/**
 * Initializes the root DOM element for rendering.
 *
 * @param {Element} dom - The root DOM element.
 * @returns {{ render: (vNode: VNode) => void }} An object with a render method to update the root.
 */
export function createRoot(dom: Element) {
  root = dom;
  return { render: (vNode: VNode) => { RootVNode = vNode; rerender(); } };
}

/**
 * Rerenders the root DOM element with the current virtual node.
 *
 * - Replaces all children of the root element with the rendered VNode.
 * - If no VNode is set, inserts an empty text node.
 */
export function rerender() {
  root?.replaceChildren(RootVNode ? createDom(RootVNode) : document.createTextNode(""));
}
